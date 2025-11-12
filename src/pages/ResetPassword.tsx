export default function ResetPassword() {
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
                </div>

                {/* Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                    <h2 className="text-center text-2xl font-bold text-accent-700 mb-6">Şifremi Unuttum</h2>
                    <form className="space-y-5">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-accent-600"
                            >
                                Yeni Şifre
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="****"
                                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-accent-600"
                            >
                                Yeni Şifre Tekrar
                            </label>
                            <input
                                type="password"
                                id="password-repeat"
                                placeholder="****"
                                className="w-full px-4 py-3 rounded-lg border-2 border-accent-200 bg-white text-accent-800 placeholder:text-accent-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-primary-400 to-primary-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            Şifremi Sıfırla
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}