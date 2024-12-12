
import React from 'react';
import './esra.css';
import esraImage from '../gorsel/esra.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Esra = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src={esraImage} alt="Esra Turan" className="profile-image" />
                </div>
                <h1>Esra Turan</h1>
                <p><strong>Okul Numarası:</strong> 2022123015</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Donanım ve yazılım kısmında ESP32 kurulumu ve gerekli bağlantıların yapılması, LCD ekran kodlarının araştırılması ve yazılması, ultrasonik sensör ve diğer bileşenlerin entegrasyonu</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler ve IoT (Nesnelerin İnterneti)</p>
                <p><strong>İlgilendiği Alanlar:</strong> IoT, yapay zeka, veri bilimi, mobil programlama</p>
            </div>
        </div>
    );
};

export default Esra;
