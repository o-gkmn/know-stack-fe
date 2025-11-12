// src/hooks/useAuth.ts
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiUserService } from '../lib/api';
import type { dto_CreateUserRequest, dto_LoginRequest } from '../lib/api';
import { showErrorToast, showSuccessToast } from '../utils/toast';
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../lib/api/config';
import { handleApiError } from '../utils/errorHandler';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface LoginResult {
  success: boolean;
  error?: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
    loading: true, // İlk yüklemede token kontrolü yapılacak
    error: null,
  });

  // Sayfa yüklendiğinde token kontrolü yap
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      setAuthState({
        token,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
    } else {
      setAuthState({
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      });
    }
  }, []);

  // Login fonksiyonu
  const login = useCallback(async (
    credentials: dto_LoginRequest,
    options?: { redirectTo?: string; replace?: boolean }
  ): Promise<LoginResult> => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await ApiUserService.postUsersLogin(credentials);

      if (response.accessToken) {
        // Access token'ı kaydet
        localStorage.setItem(AUTH_TOKEN_KEY, response.accessToken);

        // Refresh token'ı da kaydet (varsa)
        if (response.refreshToken) {
          localStorage.setItem(REFRESH_TOKEN_KEY, response.refreshToken);
        }

        setAuthState({
          token: response.accessToken,
          isAuthenticated: true,
          loading: false,
          error: null,
        });

        // Başarı toast'ı göster
        showSuccessToast('Giriş başarılı! Hoş geldiniz.');

        // Yönlendirme
        const redirectPath = options?.redirectTo || '/';
        navigate(redirectPath, { replace: options?.replace ?? true });

        return { success: true };
      } else {
        const errorMsg = 'Token alınamadı. Lütfen tekrar deneyin.';
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: errorMsg,
        }));
        showErrorToast(new Error(errorMsg), errorMsg);
        return { success: false, error: errorMsg };
      }
    } catch (err: unknown) {
      // Hata toast'ı göster
      showErrorToast(err, 'Giriş yapılırken bir hata oluştu.');

      // Error mesajını al (toast zaten gösterildi, bu sadece state için)
      const errorMessage = err instanceof Error && 'status' in err
        ? (err as { message?: string }).message || 'Giriş yapılırken bir hata oluştu.'
        : 'Giriş yapılırken bir hata oluştu.';

      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));

      return { success: false, error: errorMessage };
    }
  }, [navigate]);

  // Logout fonksiyonu
  const logout = useCallback((redirectTo?: string) => {
    // Her iki token'ı da temizle
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

    setAuthState({
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });

    showSuccessToast('Başarıyla çıkış yapıldı.');

    const redirectPath = redirectTo || '/login';
    navigate(redirectPath, { replace: true });
  }, [navigate]);

  // Register fonksiyonu
  const register = useCallback(async (
    userData: dto_CreateUserRequest,
    options?: { redirectTo?: string }
  ): Promise<LoginResult> => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));

    try {
      await ApiUserService.postUsersRegister(userData);

      // Register başarılı
      setAuthState(prev => ({ ...prev, loading: false }));
      showSuccessToast('Kayıt başarılı! Lütfen giriş yapın.');

      // Login sayfasına yönlendir
      const redirectPath = options?.redirectTo || '/login';
      navigate(redirectPath, { replace: true });

      return { success: true };
    } catch (err: unknown) {
      // API hatasını işle ve kullanıcı dostu mesaj al
      const errorMessage = handleApiError(err, 'Kayıt olurken bir hata oluştu.');
      
      // Hata toast'ı göster
      showErrorToast(err, errorMessage);

      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));

      return { success: false, error: errorMessage };
    }
  }, [navigate]);

  // Token'ı kontrol et (örneğin API çağrısı öncesi)
  const checkAuth = useCallback(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token && token !== authState.token) {
      setAuthState(prev => ({
        ...prev,
        token,
        isAuthenticated: true,
      }));
      return true;
    }
    return authState.isAuthenticated;
  }, [authState.token, authState.isAuthenticated]);

  // Error'ı temizle
  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    // State
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    loading: authState.loading,
    error: authState.error,

    // Functions
    login,
    logout,
    checkAuth,
    clearError,
    register,
  };
}