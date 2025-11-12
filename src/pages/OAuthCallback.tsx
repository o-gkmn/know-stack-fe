import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../lib/api/config";
import { showSuccessToast } from "../utils";

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);

    console.log(params);
    console.log(hash);

    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')


    console.log(accessToken);
    console.log(refreshToken);

    console.log(accessToken && refreshToken ? 'true' : 'false');

    if (accessToken && refreshToken) {
      localStorage.setItem(AUTH_TOKEN_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

      showSuccessToast('Giriş başarılı! Hoş geldiniz.');

      window.history.replaceState({}, document.title, '/');
      navigate('/', { replace: true });
    } else {
      console.error('Giriş başarısız! Lütfen tekrar deneyin.');
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-secondary-500 via-secondary-600 to-accent-600">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl text-white font-semibold">Google ile giriş yapılıyor...</p>
      </div>
    </div>
  );
}

export default AuthCallback;