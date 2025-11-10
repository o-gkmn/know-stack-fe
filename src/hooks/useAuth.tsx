// src/hooks/useAuth.ts
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiUserService } from '../lib/api';
import type { dto_LoginRequest } from '../lib/api';
import { showErrorToast, showSuccessToast } from '../utils/toast';

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

const AUTH_TOKEN_KEY = 'authToken';

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

      if (response.token) {
        localStorage.setItem(AUTH_TOKEN_KEY, response.token);
        setAuthState({
          token: response.token,
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
    localStorage.removeItem(AUTH_TOKEN_KEY);
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
  };
}