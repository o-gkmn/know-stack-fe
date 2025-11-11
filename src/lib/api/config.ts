import axios, { type InternalAxiosRequestConfig, type AxiosError } from 'axios';
import { OpenAPI } from './core/OpenAPI';

// API Base URL'i environment variable'dan al
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

// Token key'leri
const AUTH_TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

// Refresh işlemi için flag (çift refresh'i önlemek için)
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Global axios instance'a interceptor ekle
// Bu şekilde openapi-typescript-codegen'in kullandığı axios da refresh mekanizmasını kullanacak
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // 401 hatası ve henüz retry yapılmadıysa
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Refresh endpoint'ine yapılan istek başarısız olduysa, döngüye girmeyi önle
      if (originalRequest.url?.includes('/users/refresh')) {
        isRefreshing = false;
        processQueue(error, null);
        
        // Token'ları temizle ve login sayfasına yönlendir
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.location.href = '/login';
        return Promise.reject(error);
      }

      if (isRefreshing) {
        // Başka bir request zaten refresh yapıyorsa, kuyrukta bekle
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
            }
            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

      if (!refreshToken) {
        // Refresh token yoksa login sayfasına yönlendir
        localStorage.removeItem(AUTH_TOKEN_KEY);
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        // Refresh token endpoint'ine istek at (interceptor'ı bypass etmek için yeni axios instance kullan)
        const refreshAxios = axios.create();
        const response = await refreshAxios.post(`${API_BASE_URL}/users/refresh`, {
          refreshToken: refreshToken,
        });

        const newToken = response.data.refreshToken;

        if (newToken) {
          // Yeni token'ı localStorage'a kaydet
          localStorage.setItem(AUTH_TOKEN_KEY, newToken);
          
          // OpenAPI config'i güncelle
          if (originalRequest.headers) {
            originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
          }

          // Bekleyen istekleri işle
          processQueue(null, newToken);

          // Orijinal isteği tekrar dene
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // Refresh başarısız, kullanıcıyı logout yap
        processQueue(refreshError as AxiosError, null);
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// OpenAPI konfigürasyonunu ayarla
OpenAPI.BASE = API_BASE_URL;
OpenAPI.WITH_CREDENTIALS = false;
OpenAPI.CREDENTIALS = 'include';

// Token'ı dinamik olarak almak için function
OpenAPI.TOKEN = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token || '';
};

// Custom headers ekle
OpenAPI.HEADERS = {
  'Content-Type': 'application/json',
};

export { OpenAPI, AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY };

