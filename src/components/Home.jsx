// Home.jsx
import React from 'react';
import './Home.css'; // CSS dosyasını import ediyoruz
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Akıllı Park Sistemi</h1>
                <p> Akıllı Park Sistemi, park alanlarının daha verimli yönetilmesini sağlayan, teknolojiyi kullanarak araçların park edilme süreçlerini kolaylaştıran ve park yerlerinin doluluk durumunu gerçek zamanlı izleyen bir çözümdür.</p>
            </header>



            <section className="goal-section">
                <h2>Proje Amacı</h2>
                <p>Akıllı park sisteminin temel amacı, park yerlerinin yönetimini daha verimli hale getirerek araçların park yeri bulma süreçlerini hızlandırmak, trafiği rahatlatmak, çevresel etkileri azaltmak ve kullanıcıların daha hızlı ve kolay bir şekilde park etmelerini sağlamaktır. Bu, şehir içi yaşamı daha düzenli ve verimli hale getirirken, zaman, enerji ve kaynak tasarrufu sağlayarak sürdürülebilir bir ulaşım altyapısı sunar.</p>
            </section>
            <section className="team-section">
                <h2>Ekip Üyeleri</h2>
                <ul>

                    <li><Link to="/hatice">Hatice Demiryürek</Link></li>
                    <li><Link to="/sila">Sıla Kasalı</Link></li>
                    <li><Link to="/furkan">Furkan Öger</Link></li>
                    <li><Link to="/emin">Muhammed Emin Doğan</Link></li>


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
