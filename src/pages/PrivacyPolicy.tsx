import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-linear-to-br from-secondary-500 via-secondary-600 to-accent-500">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-2xl font-bold">
          <span className="bg-linear-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent">
            Know
          </span>
          <span className="text-white">Stack</span>
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-1 sm:py-6 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-accent-700 mb-4">Gizlilik Politikası</h1>
          <p className="text-gray-600 mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            {/* Giriş */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">Giriş</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Know Stack ("Biz", "Bizim", "Platform") olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
                Bu Gizlilik Politikası, kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, paylaştığımızı ve 
                koruduğumuzu açıklamaktadır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Platformumuzu kullanarak, bu Gizlilik Politikasında açıklanan uygulamaları kabul etmiş olursunuz. 
                Kişisel bilgilerinizin gizliliğini korumak için KVKK (Kişisel Verilerin Korunması Kanunu) ve 
                GDPR standartlarına uygun hareket ediyoruz.
              </p>
            </section>

            {/* 1. Topladığımız Bilgiler */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">1. Topladığımız Bilgiler</h2>
              
              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">1.1 Doğrudan Sizden Topladığımız Bilgiler</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hesap oluştururken ve platformu kullanırken aşağıdaki bilgileri topluyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Hesap Bilgileri:</strong> İsim, soyisim, kullanıcı adı, e-posta adresi, şifre</li>
                <li><strong>Profil Bilgileri:</strong> Biyografi, profil fotoğrafı, uzmanlık alanları, sosyal medya bağlantıları</li>
                <li><strong>İçerik:</strong> Paylaştığınız sorular, cevaplar, yorumlar ve makaleler</li>
                <li><strong>İletişim Bilgileri:</strong> Destek taleplerinde paylaştığınız bilgiler</li>
              </ul>

              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">1.2 Otomatik Olarak Topladığımız Bilgiler</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platformumuzu kullandığınızda otomatik olarak şu bilgileri topluyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Kullanım Verileri:</strong> Ziyaret ettiğiniz sayfalar, tıklamalar, arama sorguları, oturum süreleri</li>
                <li><strong>Cihaz Bilgileri:</strong> IP adresi, tarayıcı türü ve sürümü, işletim sistemi, cihaz tanımlayıcıları</li>
                <li><strong>Çerezler ve İzleme:</strong> Çerezler, web beacons ve benzer teknolojiler</li>
                <li><strong>Konum Verileri:</strong> IP adresinizden türetilen genel konum bilgisi</li>
              </ul>

              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">1.3 Üçüncü Taraflardan Alınan Bilgiler</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google OAuth gibi üçüncü taraf hizmetleri kullanarak giriş yaptığınızda, bu hizmetlerden 
                temel profil bilgilerinizi (ad, e-posta) alabiliriz.
              </p>
            </section>

            {/* 2. Bilgileri Nasıl Kullanıyoruz */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Hizmet Sunumu:</strong> Hesabınızı yönetmek ve platform özelliklerini sağlamak</li>
                <li><strong>Kişiselleştirme:</strong> İlgi alanlarınıza uygun içerik ve öneriler sunmak</li>
                <li><strong>İletişim:</strong> Önemli güncellemeler, bildirimler ve destek mesajları göndermek</li>
                <li><strong>Güvenlik:</strong> Dolandırıcılığı önlemek, güvenlik ihlallerini tespit etmek</li>
                <li><strong>Analiz ve İyileştirme:</strong> Platform performansını analiz etmek ve iyileştirmeler yapmak</li>
                <li><strong>Yasal Yükümlülükler:</strong> Yasal gerekliliklere uymak ve haklarımızı korumak</li>
              </ul>
            </section>

            {/* 3. Bilgi Paylaşımı */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">3. Bilgilerinizi Kimlerle Paylaşıyoruz</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmıyoruz:
              </p>
              
              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">3.1 Kamuya Açık Bilgiler</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Profil bilgileriniz, paylaştığınız sorular, cevaplar ve yorumlar diğer kullanıcılar tarafından 
                görülebilir. Bu bilgileri paylaşırken dikkatli olmanızı öneririz.
              </p>

              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">3.2 Hizmet Sağlayıcılar</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platformumuzun işletilmesi için güvenilir üçüncü taraf hizmet sağlayıcılarla çalışıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Bulut barındırma hizmetleri (AWS, Google Cloud)</li>
                <li>Analitik araçları (Google Analytics)</li>
                <li>E-posta hizmet sağlayıcıları</li>
                <li>Ödeme işlemcileri (gelecekte)</li>
              </ul>

              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">3.3 Yasal Gereklilikler</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yasal zorunluluk halinde, mahkeme kararı veya resmi makam talebi durumunda bilgilerinizi 
                paylaşabiliriz.
              </p>

              <h3 className="text-xl font-semibold text-accent-600 mb-3 mt-6">3.4 İş Devri</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Birleşme, satın alma veya varlık satışı durumunda, kullanıcı bilgileri devredilen varlıklar 
                arasında olabilir.
              </p>
            </section>

            {/* 4. Veri Güvenliği */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">4. Veri Güvenliği</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemleri alıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Şifreleme:</strong> Hassas veriler SSL/TLS ile şifrelenir</li>
                <li><strong>Erişim Kontrolü:</strong> Bilgilerinize yalnızca yetkili personel erişebilir</li>
                <li><strong>Güvenlik Duvarları:</strong> Sistemlerimiz güvenlik duvarları ile korunur</li>
                <li><strong>Düzenli Denetimler:</strong> Güvenlik açıklarını tespit etmek için düzenli testler yapılır</li>
                <li><strong>Şifre Güvenliği:</strong> Şifreler güvenli hash algoritmaları ile saklanır</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Bununla birlikte, internet üzerinden veri iletiminin veya elektronik depolamanın %100 güvenli 
                olmadığını unutmayın.
              </p>
            </section>

            {/* 5. Çerezler */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">5. Çerezler ve İzleme Teknolojileri</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platformumuzda aşağıdaki çerez türlerini kullanıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Zorunlu Çerezler:</strong> Platformun çalışması için gerekli</li>
                <li><strong>Performans Çerezleri:</strong> Platform performansını analiz etmek için</li>
                <li><strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi hatırlamak için</li>
                <li><strong>Reklam Çerezleri:</strong> (Gelecekte) İlgili reklamlar göstermek için</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Tarayıcı ayarlarınızdan çerezleri yönetebilir veya reddedebilirsiniz. Ancak bazı çerezleri 
                reddetmeniz platformun işlevselliğini etkileyebilir.
              </p>
            </section>

            {/* 6. Haklarınız */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">6. Kullanıcı Hakları (KVKK & GDPR)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Erişim Hakkı:</strong> Hangi kişisel verilerinizin işlendiğini öğrenme</li>
                <li><strong>Düzeltme Hakkı:</strong> Yanlış veya eksik bilgilerin düzeltilmesini talep etme</li>
                <li><strong>Silme Hakkı:</strong> Kişisel verilerinizin silinmesini isteme ("unutulma hakkı")</li>
                <li><strong>İtiraz Hakkı:</strong> Veri işleme faaliyetlerine itiraz etme</li>
                <li><strong>Taşınabilirlik Hakkı:</strong> Verilerinizi yapılandırılmış formatta alma</li>
                <li><strong>Sınırlama Hakkı:</strong> Belirli durumlarda veri işlemenin sınırlandırılmasını isteme</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Bu haklarınızı kullanmak için privacy@knowstack.com adresine e-posta gönderebilirsiniz.
              </p>
            </section>

            {/* 7. Veri Saklama */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">7. Veri Saklama Süresi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel bilgilerinizi, toplandığı amaç için gerekli olduğu sürece saklıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Hesap Bilgileri:</strong> Hesabınızı kapattıktan sonra 90 gün</li>
                <li><strong>İçerik:</strong> Hesap kapatıldıktan sonra anonim hale getirilir</li>
                <li><strong>Günlük Kayıtları:</strong> 12 ay</li>
                <li><strong>Analitik Veriler:</strong> 24 ay</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Yasal yükümlülükler için gerekli olan veriler daha uzun süre saklanabilir.
              </p>
            </section>

            {/* 8. Çocukların Gizliliği */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">8. Çocukların Gizliliği</h2>
              <p className="text-gray-700 leading-relaxed">
                Platformumuz 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki 
                çocuklardan kişisel bilgi toplamıyoruz. Eğer 13 yaşın altında bir çocuğun bilgilerini 
                topladığımızı fark edersek, bu bilgileri derhal sileriz.
              </p>
            </section>

            {/* 9. Uluslararası Veri Transferi */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">9. Uluslararası Veri Transferi</h2>
              <p className="text-gray-700 leading-relaxed">
                Verileriniz, bulut hizmet sağlayıcılarımız aracılığıyla farklı ülkelerde saklanabilir. 
                Bu transferleri yaparken KVKK ve GDPR standartlarına uygun veri koruma önlemleri alıyoruz.
              </p>
            </section>

            {/* 10. Değişiklikler */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">10. Gizlilik Politikası Değişiklikleri</h2>
              <p className="text-gray-700 leading-relaxed">
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişikliklerde sizi 
                e-posta veya platform bildirimi ile bilgilendireceğiz. Güncellenmiş politikayı düzenli 
                olarak gözden geçirmenizi öneririz.
              </p>
            </section>

            {/* 11. İletişim */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent-700 mb-4">11. İletişim</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gizliliğinizle ilgili sorularınız veya endişeleriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-700"><strong>Veri Sorumlusu:</strong> Know Stack Platform</p>
                <p className="text-gray-700"><strong>Email:</strong> privacy@knowstack.com</p>
                <p className="text-gray-700"><strong>Email (Destek):</strong> support@knowstack.com</p>
                <p className="text-gray-700"><strong>Adres:</strong> İstanbul, Türkiye</p>
                <p className="text-gray-700 mt-4">
                  <strong>KVKK İlgili Kişi Başvuru Formu:</strong> kvkk@knowstack.com
                </p>
              </div>
            </section>

            {/* Son Not */}
            <section className="mb-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-500">
              <p className="text-gray-700 leading-relaxed">
                <strong>Önemli Not:</strong> Gizliliğiniz bizim için önemlidir. Bu politika hakkında 
                herhangi bir sorunuz varsa lütfen bizimle iletişime geçmekten çekinmeyin. Haklarınızı 
                kullanmak istediğinizde size yardımcı olmaktan mutluluk duyarız.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

