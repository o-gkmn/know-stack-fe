import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* Header */}
      <header className="bg-linear-to-r from-secondary-600 to-secondary-500 shadow-xl border-b-4 border-primary-400 shrink-0">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-3xl font-bold text-white hover:text-primary-200 transition-all duration-300 transform hover:scale-105"
            >
              <span className="bg-linear-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">
                Know
              </span>
              <span className="text-white">Stack</span>
            </Link>
            <ul className="flex gap-3">
              <li>
                <Link
                  to="/"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive('/')
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'text-white hover:bg-secondary-400/80 hover:shadow-md'
                  }`}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive('/about')
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'text-white hover:bg-secondary-400/80 hover:shadow-md'
                  }`}
                >
                  Hakkında
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive('/login')
                      ? 'bg-primary-400 text-white shadow-lg shadow-primary-400/50'
                      : 'text-white hover:bg-secondary-400/80 hover:shadow-md'
                  }`}
                >
                  Giriş
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="w-full h-full bg-white/80 backdrop-blur-sm">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;

