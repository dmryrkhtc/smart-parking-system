// ProjectProcesses.jsx
import React from 'react';
import './ProjectProcesses.css'; // CSS dosyasını import ediyoruz

const ProjectProcesses = () => {
    return (
        <div className="project-processes-container">
            <header className="project-processes-header">
                <h1>Proje Süreçleri</h1>
                <p>Projenin geliştirme aşamaları ve bu süreçte karşılaşılan zorluklar hakkında bilgi edinin.</p>
            </header>

            <section className="development-section">
                <h2>Geliştirme Aşamaları</h2>
                <ol>
                    <li>Proje fikrinin belirlenmesi ve ekip oluşturulması.</li>
                    <li>Kullanılacak donanım ve yazılım teknolojilerinin seçimi.</li>
                    <li>Donanım bileşenlerinin montajı ve bağlantılarının yapılması.</li>
                    <li>Raspberry Pi kodlarının yazılması ve test edilmesi.</li>
                    <li>Web sitesinin geliştirilmesi ve entegrasyon.</li>
                    <li>Sistemin genel testi ve hata ayıklama.</li>
                    <li>Sunum ve poster hazırlıkları.</li>
                </ol>
            </section>

            <section className="challenges-section">
                <h2>Karşılaşılan Zorluklar ve Çözümler</h2>
                <ul>
                    <li><strong>Zorluk:</strong> Ultrasonik sensörlerin doğru ölçüm yapmaması.</li>
                    <li><strong>Çözüm:</strong> Sensörlerin yerleşim açıları ve bağlantıları yeniden düzenlendi.</li>
                    <li><strong>Zorluk:</strong> Ölçüm yaparken yazılımı tekrardan başlatmak</li>
                    <li><strong>Çözüm:</strong> Timer tabanlı çözümler uygulanarak sistem optimize edildi.</li>
                </ul>
            </section>
        </div>
    );
};

export default ProjectProcesses;
