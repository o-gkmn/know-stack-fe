export default function Login() {
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
          <p className="text-secondary-100 text-sm">Hesabınıza giriş yapın</p>
        </div>

        {/* Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-accent-700 mb-6 text-center">Giriş Yap</h2>

          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-accent-600"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                placeholder="ornek@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
              />
            </div>
            {/* Password */}
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
                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
              />
            </div>
            {/* Forget Password and Remember me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-accent-300 text-primary-400 focus:ring-primary-400 focus:ring-2"
                />
                <span className="text-accent-600">Beni hatırla</span>
              </label>
              <a href="#" className="text-secondary-500 hover:text-secondary-600 font-medium transition-colors">
                Şifremi unuttun?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-primary-400 to-primary-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 "
            >
              Giriş Yap
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-accent-400">veya</span>
              </div>
            </div>

            {/* Login with Google */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-700 font-medium hover:bg-accent-50 hover:border-accent-300 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google ile Giriş
              </button>
            </div>
          </form>

          {/* Register */}
          <div className="mt-6 text-center text-sm text-accent-600">
            Hesabınız yok mu?{' '}
            <a href="/register" className="text-secondary-500 hover:text-secondary-600 font-semibold transition-colors">
              Kayıt Ol
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
    </div>
  );
}