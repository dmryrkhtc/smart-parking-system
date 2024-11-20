// TechnicalDetails.jsx
import React from 'react';
import './TechnicalDetails.css'; // CSS dosyasını import ediyoruz

const TechnicalDetails = () => {
    return (
        <div className="technical-details-container">
            <header className="technical-details-header">
                <h1>Teknik Detaylar</h1>
                <p>Akıllı Park Sistemi projesinin teknik detaylarına göz atın.</p>
            </header>

            <section className="hardware-section">
                <h2>Kullanılan Donanım Bileşenleri</h2>
                <ul>
                    <li>Raspberry Pi 3</li>
                    <li>Ultrasonik Sensör (HC-SR04)</li>
                    <li>LED Göstergeler</li>
                    <li>Buzzer</li>
                    <li>12V Servo Motor</li>
                    <li>Bluetooth Modülü (HC-05)</li>
                </ul>
            </section>

            <section className="software-section">
                <h2>Mikroişlemci Yazılım Modeli</h2>
                <p>
                    Projede kullanılan mikroişlemci, sensörlerden veri toplayarak uygun park alanlarını tespit eder ve LED'lerle görsel geri bildirim sağlar.
                    Aynı zamanda sesli geri bildirim için buzzer kullanılır.
                </p>
            </section>

            <section className="code-section">
                <h2>Yazılım Kodları</h2>
                <p>
                    Projenin yazılım kodları, Raspberry Pİ ide kullanılarak yazılmıştır. Aşağıda temel bir kod yapısı örneği(şimdilik orijinal kodumuz sonradan eklenecektir.) verilmiştir:
                </p>
                <pre>
                    {`// Sensör verilerini okuma
const int trigPin = 9;
const int echoPin = 10;

void setup() {
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);
    Serial.begin(9600);
}

void loop() {
    // Mesafe ölçümü ve LED/Buzzer tepkileri burada
}`}
                </pre>
            </section>
        </div>
    );
};

export default TechnicalDetails;
