// Home.jsx
import React from 'react';
import './Home.css'; // CSS dosyasını import ediyoruz

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Akıllı Park Sistemi</h1>
                <p>Bu proje, park alanlarını daha verimli yönetmeyi amaçlayan bir akıllı park sistemini geliştirmeyi hedefliyor.</p>
            </header>



            <section className="goal-section">
                <h2>Proje Amacı</h2>
                <p>Projemiz, sensörler aracılığıyla sesli ve görsel geri bildirimler vererek arabayı kolay park etmemize yardımcı oluyor.</p>
            </section>
            <section className="team-section">
                <h2>Ekip Üyeleri</h2>
                <ul>

                    <li> Hatice Demiryürek</li>
                    <li>Sıla Kasalı</li>
                    <li>Furkan Öger</li><li>Melike Akyol</li><li>Beyza Busenur Çelik</li><li>Esra Turan</li><li>Elif Dağlar</li><li>Muhammed Emin Doğan</li><li>Emir Karakaş</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
