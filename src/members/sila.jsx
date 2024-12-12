
import React from 'react';
import './sila.css';
import silaImage from '../gorsel/sila.jpg';
import backgroundImage from '../gorsel/detay.webp';

const Sila = () => {
    return (
        <div
            className="profile-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img src={silaImage} alt="Sıla Kasalı" className="profile-image" />
                </div>
                <h1>Sıla Kasalı</h1>
                <p><strong>Okul Numarası:</strong> 2022113035</p>
                <p><strong>Sınıf:</strong> Bilgisayar Mühendisliği 3. Sınıf</p>
                <p><strong>Proje Katkıları:</strong> Projede gerçekleşen donanım yazılım kısmımdaki bilgileri ayrıntıları toplayarak rapor isterlerine göre düzenlemek gereken kaynakları ve fotoğrafları eklemek. Donanımsal yapının makete entegrasyonu sağlamak ve uygun boyutlarda maket tasarlamak.
                </p>
                <p><strong>Aldığı Ders:</strong>  Mikroişlemciler ve IOT (Nesnelerin İnterneti)</p>
                <p><strong>İlgilendiği Alanlar:</strong> Veritabanı geliştirmek, bu konuda Akademik başarı sağlamaya çalışmak, Yüksek Lisans için araştırmalar yapmak ve makale okumak. Kişisel gelişimi geliştirmek için kitaplar okumak ve araştırma yapmak.</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/sila1922" target="_blank" rel="noopener noreferrer">github.com/sila1922</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/s%C4%B1la-k-b00120302" target="_blank" rel="noopener noreferrer">linkedin.com/sila1922</a></p>
            </div>
        </div>
    );
};

export default Sila;
