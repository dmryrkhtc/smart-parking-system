import React from 'react';
import './hatice.css'; // Use the same CSS file
import eminImage from '../gorsel/emin.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Emin = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img
                        src={eminImage}
                        alt="Muhammed Emin Doğan"
                        className="profile-image"
                    />
                </div>
                <h1>Muhammed Emin Doğan</h1>
                <p><strong>Okul Numarası:</strong> 2022123106</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> İlgili sensörlerin devre kurulumlarını yapmak ve entegre çalışmasını sağlamak</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler</p>
                <p><strong>İlgilendiği Alanlar:</strong> Veri bilimi, yapay zeka ve gömülü sistemler</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Emindgn0" target="_blank" rel="noopener noreferrer">github.com/Emindgn0</a></p>
            </div>
        </div>
    );
};

export default Emin;
