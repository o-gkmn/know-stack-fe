import { OpenAPI } from './core/OpenAPI';

// API Base URL'i environment variable'dan al
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

// OpenAPI konfigürasyonunu ayarla
OpenAPI.BASE = API_BASE_URL;
OpenAPI.WITH_CREDENTIALS = false;
OpenAPI.CREDENTIALS = 'include';

// Token'ı dinamik olarak almak için function
OpenAPI.TOKEN = async () => {
  const token = localStorage.getItem('authToken');
  return token || '';
};

// Custom headers ekle
OpenAPI.HEADERS = {
  'Content-Type': 'application/json',
};

export { OpenAPI };

