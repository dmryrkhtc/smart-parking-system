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
                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <h3>Araştırma ve Planlama</h3>
                    <li>Projenin işleyişi ile ilgili detaylı araştırma ve planlama yapıldı.</li>
                    <li>Kullanılacak ekipmanların özellikleri belirlendi ve tanıtıldı</li>
                    <li>Projenin kapsamını göstermek amacıyla bir tanıtım videosu çekildi.</li>
                    <li>Takım üyeleri arasında görev dağılımı yapıldı.</li>
                    <h3>Raspberry Pi Kurulumu</h3>
                    <li>Raspberry Pi kartı değiştirildi.</li>
                    <li>Klavye ve mouse bağlantısı sağlandı.
                    </li>
                    <li>Raspberry Pi’nin kurulumu hatasız bir şekilde tamamlandı.</li>
                    <li>Cihaza internet bağlantısı yapıldı.</li>
                    <li>Kodlama işlemleri için Python IDE kuruldu.</li>
                    <h3>Sensör ve Devre Elemanları Kurulumu</h3>
                    <li>Breadboard üzerine ultrasonik mesafe sensörü bağlandı.</li>
                    <li>Mesafe ölçümü için kodlar yazılmaya başlandı ve sensör ile ölçüm test edildi.</li>
                    <h3>Web Geliştirme Çalışmaları</h3>
                    <li>Web sitesi geliştirmesi için React, Node.js ve Visual Studio Code kuruldu</li>
                    <li>React üzerinden gerekli geliştirmeler yapıldı.</li>
                    <h3>Donanım Ve Yazılım Geliştirme</h3>
                    <li>Breadboard’a buzzer, LED ve mesafe sensörü eklendi.</li>
                    <li>Mesafe sensörünün, bir cisim yaklaştıkça sürekli ölçüm yapması için kod yazıldı.</li>
                    <li>Buzzer’ın kodları tamamlandı; sensör ile cismin mesafesi azaldıkça buzzer’ın ses
                        sıklığı artırıldı</li>
                    <li>Belirli mesafe aralıklarına göre farklı renklerde LED yanması sağlanarak proje görsel
                        açıdan zenginleştirildi.</li>


                </ol>
            </section>

            <section className="challenges-section">
                <h2>Karşılaşılan Zorluklar ve Çözümler</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li><strong>Zorluk 1:</strong>Raspberry Pi bozuk olduğundan klavye ve mouse bağlantısı yapılamadı. </li>
                    <li><strong>Çözüm 1:</strong> Yeni Raspberry Pi alındı.</li>
                    <li><strong>Zorluk 2:</strong> Buzzer’ın sesini ayarlarken ses sıklığı ayırt edilemiyordu. Mesafeye göre ses
                        ayrımını belirginleştirmekte zorluk yaşandı .</li>
                    <li><strong>Çözüm 2:</strong>  Bunun sonucunda deneme yanılma ile frekans yüzdesi %50 ye düşürüldü.</li>
                </ul>
            </section>
        </div>
    );
};

export default ProjectProcesses;
