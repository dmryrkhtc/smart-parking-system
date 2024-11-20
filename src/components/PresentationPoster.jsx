
import React from 'react';
import './PresentationPoster.css' // CSS dosyasını import ediyoruz

const PresentationPoster = () => {
    return (
        <div className="presentation-container">
            <header className="presentation-header">
                <h1>Sunum ve Poster</h1>
                <p>Proje sunumumuzu ve posterimizi aşağıdaki bağlantılardan indirebilirsiniz.</p>
            </header>

            <section className="download-section">
                <h2>İndirilebilir Dosyalar</h2>
                <ul>
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
