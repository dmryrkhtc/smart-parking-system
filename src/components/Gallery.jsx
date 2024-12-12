// Gallery.jsx
import React from 'react';
import './Gallery.css'; // CSS dosyasını import ediyoruz

const Gallery = () => {
    return (
        <div className="gallery-container">
            <header className="gallery-header">
                <h1>Galeri</h1>
                <p>Projemizden fotoğraf ve videoları inceleyin.</p>
            </header>

            <section className="photos-section">
                <h2>Fotoğraflar</h2>
                <div className="photo-grid">
                    <img src="/gorsel/gal1.jpg" alt="Proje Fotoğrafı 1" />
                    <img src="/gorsel/gal2.jpg" alt="Proje Fotoğrafı 2" />
                    <img src="/gorsel/gal3.jpg" alt="Proje Fotoğrafı 3" />
                    <img src="/gorsel/gal4.jpg" alt="Proje Fotoğrafı 4" />
                    <img src="/gorsel/gal5.jpg" alt="Proje Fotoğrafı 5" />
                    <img src="/gorsel/gal6.jpg" alt="Proje Fotoğrafı 6" />
                    <img src="/gorsel/gal7.jpg" alt="Proje Fotoğrafı 7" />
                    <img src="/gorsel/gal8.jpg" alt="Proje Fotoğrafı 8" />
                </div>
            </section>

            <section className="videos-section">
                <h2>Videolar</h2>
                <p>sonradan eklenecektir</p>
                <div className="video-grid">
                    <video controls>
                        <source src="path-to-video1.mp4" type="video/mp4" />
                        Tarayıcınız bu videoyu desteklemiyor.
                    </video>
                    <video controls>
                        <source src="path-to-video2.mp4" type="video/mp4" />
                        Tarayıcınız bu videoyu desteklemiyor.
                    </video>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
