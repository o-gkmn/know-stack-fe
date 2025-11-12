import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import '../lib/api/config'; // API konfigürasyonunu yükle

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register({ username, email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-secondary-500 via-secondary-600 to-accent-600 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            <span className="bg-linear-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent">
              Know
            </span>
            <span className="text-white">Stack</span>
          </h1>
          <p className="text-secondary-100 text-sm">Yeni hesap oluşturun</p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-center text-2xl font-bold text-accent-700 mb-6">Kayıt Ol</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-accent-600"
              >
                Kullanıcı Adı
              </label>
              <input
                type="text"
                id="username"
                placeholder="kullaniciadi"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-accent-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="ornek@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-accent-600"
              >
                Şifre
              </label>
              <input
                type="password"
                id="password"
                placeholder="****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-primary-400 to-primary-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Kayıt yapılıyor...</span>
                </>
              ) : (
                'Kayıt Ol'
              )}
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-accent-600">
            Zaten hesabınız var mı?{' '}
            <a href="/login" className="text-secondary-500 hover:text-secondary-600 font-semibold transition-colors">
              Giriş Yap
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-secondary-100 text-xs mt-6">
          Giriş Yaparak {' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Kullanım Koşulları
          </a>
          {' '}ve{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Gizlilik Politikası
          </a>
          'nı kabul etmiş olursunuz
        </p>

      </div>
    </div >
  )
}