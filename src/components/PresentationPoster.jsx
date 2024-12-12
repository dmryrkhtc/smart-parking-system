import React from 'react';
import './PresentationPoster.css'; // CSS dosyasını import ediyoruz
import poster from '../gorsel/poster.jpg';
const PresentationPoster = () => {
    return (
        <div className="presentation-container">
            <header className="presentation-header">
                <h1>Sunum ve Poster</h1>
                <p>Proje posterimizi ve video sunumumuzu inceleyip aşağıdaki bağlantılardan ulaşabilirsiniz.</p>
            </header>

            <section className="poster-section">

                <img src={poster} alt="Proje Posteri" className="poster-image" />
            </section>

            <section className="download-section">
                <h2>Erişilebilir Dosyalar</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li>
                        <a href="path-to-presentation.pdf" download>
                            Proje Sunumu (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="path-to-poster.pdf" download>
                            Proje Posteri (PDF)
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default PresentationPoster;
