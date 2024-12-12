import React from 'react';
import './hatice.css'; // Import the CSS file
import haticeImage from '../gorsel/hatice.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Hatice = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img
                        src={haticeImage}
                        alt="Hatice Demiryürek"
                        className="profile-image"
                    />
                </div>
                <h1>Hatice Demiryürek</h1>

                <p><strong>Okul Numarası:</strong> 2022123016</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Proje için istenilen web sitesini tasarlamak ve geliştirmek.</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler ve IOT (Nesnelerin İnterneti)</p>
                <p><strong>İlgilendiği Alanlar:</strong> Web geliştirme, yapay zeka, Arduino ile başlangıç seviyesinde proje geliştirme, dijital tasarım</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/dmryrkhtc" target="_blank" rel="noopener noreferrer">github.com/dmryrkhtc</a></p>

            </div>
        </div>
    );
};

export default Hatice;
