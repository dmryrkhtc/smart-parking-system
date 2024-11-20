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
                    <p> sonradan eklenecektir</p>
                    <img src="path-to-photo1.jpg" alt="Proje Fotoğrafı 1" />
                    <img src="path-to-photo2.jpg" alt="Proje Fotoğrafı 2" />
                    <img src="path-to-photo3.jpg" alt="Proje Fotoğrafı 3" />
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
