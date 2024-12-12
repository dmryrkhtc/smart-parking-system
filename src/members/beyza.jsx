import React from 'react';
import './hatice.css'; // Use the same CSS file
import beyzaImage from '../gorsel/beyza.jpg';
import backgroundImage from '../gorsel/detay.webp'; // Use the same background image

const Beyza = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img
                        src={beyzaImage}
                        alt="Beyza Busenur Çelik"
                        className="profile-image"
                    />
                </div>
                <h1>Beyza Busenur Çelik</h1>
                <p><strong>Okul Numarası:</strong> 2022123008</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Rapor ekibinde yer alarak teknik bilgi toplanması ve literatür taraması aşamalarını yürütmüştür.</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler</p>
                <p><strong>İlgilendiği Alanlar:</strong> Veri Bilimi, yapay zeka, mobil uygulama geliştirme</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/beyzabusenur" target="_blank" rel="noopener noreferrer">github.com/beyzabusenur</a></p>
            </div>
        </div>
    );
};

export default Beyza;

