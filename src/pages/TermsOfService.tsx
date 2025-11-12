import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
                    <h1 className="text-4xl font-bold text-accent-700 mb-4">Kullanım Koşulları</h1>
                    <p className="text-gray-600 mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <div className="prose prose-lg max-w-none">
                        {/* 1. Giriş */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">1. Giriş ve Kabul</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Know Stack ("Platform", "Biz", "Bizim") platformuna hoş geldiniz. Bu Kullanım Koşulları ("Koşullar"), Know Stack'e erişiminizi ve kullanımınızı düzenler. Platformumuzu kullanarak, bu koşulları kabul etmiş sayılırsınız.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Bu koşulları kabul etmiyorsanız, lütfen platformumuzu kullanmayınız. Bu koşulları zaman zaman güncelleyebiliriz ve güncellenmiş koşullar yayınlandıktan sonra platformu kullanmaya devam etmeniz, bu değişiklikleri kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>

                        {/* 2. Hizmet Tanımı */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">2. Hizmet Tanımı</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Know Stack, kullanıcıların bilgi paylaşımı, öğrenme ve iş birliği yapabileceği bir dijital platformdur. Hizmetlerimiz şunları içerir ancak bunlarla sınırlı değildir:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Soru sorma ve cevaplama özellikleri</li>
                                <li>Bilgi paylaşımı ve dokümantasyon oluşturma</li>
                                <li>Kullanıcı profilleri ve itibar sistemi</li>
                                <li>Arama ve filtreleme araçları</li>
                                <li>Topluluk etkileşimi ve tartışma forumları</li>
                            </ul>
                        </section>

                        {/* 3. Kullanıcı Hesapları */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">3. Kullanıcı Hesapları ve Güvenlik</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>3.1 Hesap Oluşturma:</strong> Platformumuzu tam olarak kullanmak için bir hesap oluşturmanız gerekmektedir. Hesap oluştururken doğru, güncel ve eksiksiz bilgiler sağlamalısınız.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>3.2 Hesap Güvenliği:</strong> Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi gizli tutmalı ve hesabınızda gerçekleşen tüm faaliyetlerden sorumlu olduğunuzu kabul edersiniz.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>3.3 Yaş Sınırlaması:</strong> Platformumuzu kullanmak için en az 13 yaşında olmalısınız. 18 yaşından küçükseniz, ebeveyn veya veli izni ile kullanmalısınız.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>3.4 Hesap Askıya Alma:</strong> Bu koşulları ihlal etmeniz durumunda hesabınızı askıya alma veya sonlandırma hakkını saklı tutarız.
                            </p>
                        </section>

                        {/* 4. Kullanıcı İçeriği */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">4. Kullanıcı İçeriği ve Sorumluluklar</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>4.1 İçerik Sahipliği:</strong> Platformda paylaştığınız tüm içeriğin (sorular, cevaplar, yorumlar, makaleler) telif haklarına sahip olmaya devam edersiniz.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>4.2 İçerik Lisansı:</strong> İçerik paylaşarak, Know Stack'e bu içeriği kullanma, kopyalama, değiştirme, dağıtma ve görüntüleme konusunda dünya çapında, telif ücreti olmayan, alt lisans verilebilir bir lisans vermiş olursunuz.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>4.3 Yasak İçerik:</strong> Aşağıdaki içerikleri paylaşmayı kabul edersiniz:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                                <li>Yasadışı, zararlı veya tehdit edici içerik</li>
                                <li>Nefret söylemi, taciz veya zorbalık içeren içerik</li>
                                <li>Telif hakkı ihlali veya fikri mülkiyet ihlali</li>
                                <li>Spam, reklam veya istenmeyen içerik</li>
                                <li>Yanlış bilgi veya aldatıcı içerik</li>
                                <li>Kişisel veya hassas bilgilerin izinsiz paylaşımı</li>
                            </ul>
                        </section>

                        {/* 5. Fikri Mülkiyet */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">5. Fikri Mülkiyet Hakları</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Know Stack platformu, logoları, tasarımı ve özellikleri dahil olmak üzere tüm içerik ve materyaller fikri mülkiyet yasalarıyla korunmaktadır. Platform içeriğini izinsiz kopyalayamaz, çoğaltamaz veya dağıtamazsınız.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Kullanıcı tarafından oluşturulan içerik hariç olmak üzere, platformdaki tüm haklar Know Stack'e aittir.
                            </p>
                        </section>

                        {/* 6. Gizlilik */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">6. Gizlilik ve Veri Kullanımı</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi için lütfen{' '}
                                <Link to="/privacy-policy" className="text-secondary-500 hover:text-secondary-600 font-semibold underline">
                                    Gizlilik Politikamızı
                                </Link>
                                {' '}inceleyin.
                            </p>
                        </section>

                        {/* 7. Sorumluluk Reddi */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">7. Sorumluluk Reddi ve Sınırlamalar</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>7.1 "Olduğu Gibi" Hizmet:</strong> Know Stack platformu "olduğu gibi" ve "mevcut olduğu şekliyle" sunulmaktadır. Hizmetin kesintisiz, güvenli veya hatasız olacağına dair garanti vermiyoruz.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>7.2 İçerik Doğruluğu:</strong> Kullanıcı tarafından oluşturulan içeriğin doğruluğunu, güvenilirliğini veya bütünlüğünü garanti etmiyoruz.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>7.3 Sorumluluk Sınırlaması:</strong> Yasaların izin verdiği ölçüde, Know Stack platformunun kullanımından kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamayız.
                            </p>
                        </section>

                        {/* 8. Değişiklikler */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">8. Hizmet Değişiklikleri ve Sonlandırma</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Herhangi bir zamanda, önceden bildirimde bulunmaksızın hizmetlerimizi değiştirme, askıya alma veya sonlandırma hakkını saklı tutarız.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Hesabınızı herhangi bir zamanda sonlandırabilirsiniz. Biz de bu koşulları ihlal etmeniz durumunda hesabınızı sonlandırma hakkını saklı tutarız.
                            </p>
                        </section>

                        {/* 9. Uyuşmazlık Çözümü */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">9. Uyuşmazlık Çözümü ve Yargı Yetkisi</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Bu Kullanım Koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri ve icra daireleri yetkilidir.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Öncelikle uyuşmazlıkları dostane yollarla çözmeye çalışacağız. Bunun mümkün olmaması durumunda yasal yollara başvurulabilir.
                            </p>
                        </section>

                        {/* 10. İletişim */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-accent-700 mb-4">10. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Bu Kullanım Koşulları hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle iletişime geçin:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700"><strong>Email:</strong> legal@knowstack.com</p>
                                <p className="text-gray-700"><strong>Adres:</strong> Know Stack Platform, İstanbul, Türkiye</p>
                            </div>
                        </section>

                        {/* Son Not */}
                        <section className="mb-8 p-6 bg-accent-50 rounded-lg border-l-4 border-accent-500">
                            <p className="text-gray-700 leading-relaxed">
                                <strong>Önemli Not:</strong> Bu Kullanım Koşullarını düzenli olarak gözden geçirmenizi öneririz.
                                Platformu kullanmaya devam ederek, güncellenmiş koşulları kabul etmiş olursunuz.
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

