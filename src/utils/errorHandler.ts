import type { 
  ApiError,
  httperrors_HTTPError,
  httperrors_HTTPValidationError,

} from '../lib/api';

/**
 * API hatalarını işleyip kullanıcı dostu mesaj döndürür
 * @param err - Yakalanan hata (unknown tipinde)
 * @param defaultMessage - Varsayılan hata mesajı
 * @returns Kullanıcı dostu hata mesajı
 */
export function handleApiError(
  err: unknown,
  defaultMessage = 'Bir hata oluştu. Lütfen tekrar deneyin.'
): string {
  // ApiError kontrolü
  if (err instanceof Error && 'status' in err) {
    const apiError = err as ApiError;

    // Body'den hata mesajını al (httperrors_HTTPError veya httperrors_HTTPValidationError)
    if (apiError.body) {
      const errorBody = apiError.body as httperrors_HTTPError | httperrors_HTTPValidationError;
      
      // ValidationError varsa, onu önceliklendir
      if ('validationError' in errorBody && errorBody.validationError?.error) {
        return errorBody.validationError.error;
      }
      
      // Title varsa kullan
      if ('httpError' in errorBody && errorBody.httpError?.title) {
        return errorBody.httpError.title;
      }
    }

    // Eğer body'den mesaj alınamadıysa, status code'a göre varsayılan mesaj
    if (apiError.status === 400) {
      return 'Geçersiz istek. Lütfen bilgilerinizi kontrol edin.';
    } else if (apiError.status === 401) {
      return 'Yetkiniz yok. Lütfen giriş yapın.';
    } else if (apiError.status === 403) {
      return 'Bu işlem için yetkiniz yok.';
    } else if (apiError.status === 404) {
      return 'İstenen kaynak bulunamadı.';
    } else if (apiError.status === 409) {
      return 'Bu kayıt zaten mevcut.';
    } else if (apiError.status === 500) {
      return 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.';
    } else if (apiError.message) {
      return apiError.message;
    }
  } else if (err instanceof Error) {
    // Genel Error
    return err.message;
  }

  return defaultMessage;
}

