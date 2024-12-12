

import React from 'react';
import './melike.css';
import melikeImage from '../gorsel/melike.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Melike = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src={melikeImage} alt="Melike Akyol" className="profile-image" />
                </div>
                <h1>Melike Akyol</h1>
                <p><strong>Okul Numarası:</strong> 2022123062</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Kod geliştirme, ESP modülü üzerine bileşen montajı, poster ve maket tasarımı</p>
                <p><strong>Aldığı Ders:</strong>  Mikroişlemciler ve IOT (Nesnelerin İnterneti)</p>
                <p><strong>İlgilendiği Alanlar:</strong> IoT, yapay zeka, veri bilimi</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/melikeakyol1" target="_blank" rel="noopener noreferrer">github.com/melikeakyol1</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/melike-akyol" target="_blank" rel="noopener noreferrer">linkedin.com/melike-akyol</a></p>
            </div>
        </div>
    );
};

export default Melike;