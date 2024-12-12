import React from 'react';
import './hatice.css'; // Use the same CSS file
import elifImage from '../gorsel/elif.jpg';

import backgroundImage from '../gorsel/detay.webp';
const Elif = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img
                        src={elifImage}
                        alt="Elif Dağlar"
                        className="profile-image"
                    />
                </div>
                <h1>Elif Dağlar</h1>
                <p><strong>Okul Numarası:</strong> 2022123080</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 4. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Rapor ekibinde yer alarak teknik bilgi toplanması, literatür taraması ve günlük çalışmaların kaydını tutma</p>
                <p><strong>Aldığı Ders:</strong> Mikroişlemciler</p>
                <p><strong>İlgilendiği Alanlar:</strong> Veri Bilimi ve yapay zeka; farklı disiplinlerden bireylerle hackathon etkinliklerinde işbirliği yapma</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/elifdaglar" target="_blank" rel="noopener noreferrer">github.com/elifdaglar</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/elifdaglar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/elifdaglar</a></p>
            </div>
        </div>
    );
};

export default Elif;
