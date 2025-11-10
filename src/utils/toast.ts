import toast from 'react-hot-toast';
import { handleApiError } from './errorHandler';

/**
 * Hata toast'ı gösterir
 * @param err - Yakalanan hata (unknown tipinde)
 * @param defaultMessage - Varsayılan hata mesajı
 */
export function showErrorToast(
  err: unknown,
  defaultMessage = 'Bir hata oluştu. Lütfen tekrar deneyin.'
): void {
  const errorMessage = handleApiError(err, defaultMessage);
  toast.error(errorMessage);
}

/**
 * Başarı toast'ı gösterir
 * @param message - Başarı mesajı
 */
export function showSuccessToast(message: string): void {
  toast.success(message);
}

/**
 * Bilgi toast'ı gösterir
 * @param message - Bilgi mesajı
 */
export function showInfoToast(message: string): void {
  toast(message, {
    icon: 'ℹ️',
  });
}

/**
 * Uyarı toast'ı gösterir
 * @param message - Uyarı mesajı
 */
export function showWarningToast(message: string): void {
  toast(message, {
    icon: '⚠️',
  });
}

