import React from 'react';
import './emir.css'; // Import the CSS file
import emirImage from '../gorsel/emir.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Emir = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src={emirImage} alt="Emir Karakaş" className="profile-image" />
                </div>
                <h1>Emir Karakaş</h1>
                <p><strong>Okul Numarası:</strong> 2021123090</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Web, maket</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler</p>
                <p><strong>İlgilendiği Alanlar:</strong> Siber güvenlik, mobil geliştirme</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/emir-karakaş" target="_blank" rel="noopener noreferrer">github.com/emirkarakaş</a></p>
            </div>
        </div>
    );
};

export default Emir;