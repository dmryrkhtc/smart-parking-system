
import React from 'react';
import './furkan.css';
import furkanImage from '../gorsel/furkan.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Furkan = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src={furkanImage} alt="Furkan Öger" className="profile-image" />
                </div>
                <h1>Furkan Öger</h1>
                <p><strong>Okul Numarası:</strong> 2021123051</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong>Kullanılan donanım elemanlarının yazılım ile entegrasyonu, Raspberry Pi içerisindeki kodların algoritmalarının oluşturulması ve yazılması.
                </p>
                <p><strong>Aldığı Ders:</strong>  Mikroişlemciler ve IOT (Nesnelerin İnterneti)</p>
                <p><strong>İlgilendiği Alanlar:</strong>Web geliştirme, Backend yazılım kısmı ile oyun ve proje geliştirme, bilimsel teknolojik içerikli kitaplar okuma ve araştırma yapma.</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/OgerFurkan" target="_blank" rel="noopener noreferrer">github.com/OgerFurkan</a></p>
            </div>
        </div>
    );
};

export default Furkan;