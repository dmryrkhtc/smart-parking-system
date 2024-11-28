// Home.jsx
import React from 'react';
import './Home.css'; // CSS dosyasını import ediyoruz
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

                    <li><Link to="/hatice">Hatice Demiryürek</Link></li>
                    <li><Link to="/sila">Sıla Kasalı</Link></li>
                    <li><Link to="/furkan">Furkan Öger</Link></li>
                    <li><Link to="/elif">Elif Dağlar</Link></li>
                    <li><Link to="/beyza">Beyza Busenur Çelik</Link></li>
                    <li><Link to="/esra">Esra Turan</Link></li>
                    <li><Link to="/melike">Melike Akyol</Link></li>
                    <li><Link to="/emir">Emir Karakaş</Link></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
