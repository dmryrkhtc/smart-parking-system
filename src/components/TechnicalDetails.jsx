
import React from 'react';
import { Link } from 'react-router-dom'; // React Router Link kullanımı için
import './TechnicalDetails.css'; // CSS dosyasını import ediyoruz

const TechnicalDetails = () => {
    const components = [
        { name: "Raspberry Pi 3", path: "/component-details/raspberry-pi-3" },
        { name: "Ultrasonik Mesafe Ölçüm Sensörü", path: "/component-details/ultrasonik-sensor" },
        { name: "LED Göstergeler", path: "/component-details/led-gostergeler" },
        { name: "Buzzer", path: "/component-details/buzzer" },
        { name: "SG90 Servo Motor", path: "/component-details/servo-motor" },
        { name: "VGA to HDMI Dönüştürücü", path: "/component-details/vga-to-hdmi" },
        { name: "LCD Ekran", path: "/component-details/lcd-ekran" },
        { name: "IR Alıcı-Verici Sensör", path: "/component-details/iralici-verici-sensor" },
        { name: "RC522 RFID Kartı", path: "/component-details/rfid-karti" },
        { name: "ESP32", path: "/component-details/esp32" },
        { name: "LCD I2C Dönüştürücü", path: "/component-details/lcd-i2c" },
    ];

    return (
        <div className="technical-details-container">
            <header className="technical-details-header">
                <h1>Teknik Detaylar</h1>
                <p>Akıllı Park Sistemi projesinin teknik detaylarına göz atın.</p>
            </header>

            <section className="hardware-section">
                <h2>Kullanılan Donanım Bileşenleri</h2>
                <ul>
                    {components.map((component, index) => (
                        <li key={index}>
                            <Link to={component.path}>{component.name}</Link>
                        </li>
                    ))}
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
                    Projenin yazılım kodları, Raspberry Pi ide kullanılarak yazılmıştır. Aşağıda temel bir kod yapısı örneği(şimdilik orijinal kodumuz sonradan eklenecektir.) verilmiştir:
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
