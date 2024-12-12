import React from "react";
import { useParams } from "react-router-dom"; // URL parametrelerini almak için
import "./ComponentDetails.css";


// Bileşen verilerini tanımlıyoruz
const componentData = {
    "raspberry-pi-3": {
        name: "Raspberry Pi 3",
        image: "/gorsel/raspberry.jpg",
        description: "Küçük ve düşük maliyetli bir bilgisayar olup,temel görevi çeşitli projelerde bilgi işlem kapasitesi sağlamak ve donanım ile yazılım arasında bağlantı kurmaktır.",
    },
    "ultrasonik-sensor": {
        name: "Ultrasonik Mesafe Ölçüm Sensörü",
        image: "/gorsel/mesafe.jpg",
        description: "Ses dalgalarını kullanarak bir cismin uzaklığını ölçen bir elektronik sensördür. Ses dalgalarını gönderip geri dönüş süresiniölçerek mesafe hesaplar.",
    },
    "led-gostergeler": {
        name: "LED Göstergeler",
        image: "/gorsel/led.jpg",
        description: "Elektrik akımını ışığa dönüştüren yarı iletken bir devre elemanıdır. Elektrik enerjisi bir LED üzerinden geçtiğinde, elektronlar hareket eder ve bu süreçte ışık yayılır. LED'ler enerji tasarruflu, dayanıklı ve uzun ömürlü olmaları nedeniyle yaygın olarak kullanılır.",
    },
    "buzzer": {
        name: "Buzzer",
        image: "/gorsel/buzzer.jpg",
        description: "Buzzer, elektrik sinyallerini ses sinyallerine dönüştüren, genellikle alarm ve uyarı sistemlerinde kullanılan bir ses çıkış cihazıdır. Küçük bir devre elemanı olan buzzer, çeşitli elektronik projelerde sesli geri bildirim sağlamak için kullanılır",
    },
    "servo-motor": {
        name: "SG90 Servo Motor",
        image: "/gorsel/servo.jpg",
        description: "Küçük boyutlu ve düşük maliyetli bir servo motordur. Bu motor,özellikle robotik projelerde, model araçlarda ve diğer otomasyon sistemlerinde yaygın olarak kullanılır. SG90, dönme hareketi sağlayan bir motor olup, belirli bir açıya dönebilmesini sağlamak için mikrodenetleyici tarafından kontrol edilir. Genellikle, 180 dereceye kadar dönebilir ve bu, belirli uygulamalar için oldukça kullanışlıdır",
    },
    "iralici-verici-sensor": { // Kısa çizgi kullanımı düzeltildi
        name: "IR Alıcı-Verici Sensör",
        image: "/gorsel/iralici.jpg",
        description: "R alıcı-verici sensörler, kablosuz iletişim ve veri iletimi, engel algılama ve hareket tespiti gibi birçok alanda kullanılarak günlük yaşamda ve endüstriyel uygulamalarda önemli bir rol oynar.",
    },
    "esp32": { // ID "esp32" olarak ayarlandı
        name: "ESP32",
        image: "/gorsel/esp.jpg",
        description: "ESP32, bir mikrodenetleyici (mikroişlemci) ve çok sayıda yerleşik özellik sunan gelişmiş bir yonga setidir. Espressif Systems tarafından üretilen ESP32, özellikle Internet of Things (IoT) projeleri ve kablosuz iletişim gereksinimlerine yönelik çok güçlü bir platform sunar. ESP32, Wi-Fi ve Bluetooth (hem klasik Bluetooth hem de BLE -Bluetooth Low Energy) desteği sunarak kablosuz veri iletimi ve alımı sağlar.",
    },

    "lcd-ekran": {
        name: "LCD Ekran",
        image: "/gorsel/lcd.jpg",
        description: " Sıvı kristal teknolojisi kullanarak görüntü oluşturan bir ekran türüdür. Elektrik sinyalleri ile sıvı kristallerin ışığı kontrol etmesi sayesinde metin, grafik veya video gibi içerikleri görüntüler",
    },
    "vga-to-hdmi": {
        name: "VGA to HDMI Dönüştürücü",
        image: "/gorsel/donusturucu.jpg",
        description: "Eski cihazların (VGA çıkışı olan bilgisayarlar, dizüstü bilgisayarlar, projeksiyon cihazları) modern HDMI girişine sahip ekranlarla (TV, monitör, projektör) uyumlu hale gelmesini sağlar. Bu dönüştürücüler, eski cihazlardan dijital HDMI sinyali oluştururken, bazı modellerde ses desteği de sunar, böylece video ve sesin HDMI üzerinden iletilmesi sağlanır",
    },
    "rfid-karti": {
        name: "RC522 RFID Kartı",
        image: "/gorsel/rfid.avif",
        description: "Radyo frekansı ile veri iletimi yapan bir RFID (Radio Frequency Identification) modülüdür. Bu modül, genellikle RFID kartlar ile birlikte çalışır ve belirli bir nesneyi tanımlamak için kullanılır. RC522 modülü, RFID kartlarının kimliğini okumak, yazmak ve bu verileri elektronik sistemlere iletmek için kullanılır. Yaygın olarak güvenlik sistemleri, erişim kontrol sistemleri, ödeme sistemleri ve çeşitli otomasyon projelerinde kullanılır",
    },
    "lcd-i2c": {
        name: "LCD I2C Dönüştürücü",
        image: "/gorsel/lcd2.jpg",
        description: "Karakter LCD I2C dönüştürücü modülü, bir LCD ekranın I2C (Inter-Integrated Circuit) protokolüyle kontrol edilmesini sağlayan bir modüldür. Bu modül, mikrodenetleyicilere (örneğin Arduino, Raspberry Pi) LCD ekran bağlarken kullanılan geleneksel 16 pin yerine sadece 4 pin (VCC, GND, SDA, SCL) kullanarak iletişim kurmayı mümkün kılar. Bu sayede daha az bağlantı ile daha kolay ve hızlı bir kurulum sağlanır."
    }

};

// Bileşen detaylarını gösteren ComponentDetails bileşeni
const ComponentDetails = () => {
    const { componentId } = useParams(); // URL parametresinden bileşen kimliği alınır
    const component = componentData[componentId];

    // Eğer geçerli bir bileşen bulunamazsa
    if (!component) {
        return <p>Bileşen bulunamadı.</p>;
    }

    // Bileşen detaylarını render etme
    return (
        <div className="component-details-container">
            <h1>{component.name}</h1>
            <img src={component.image} alt={component.name} />
            <p>{component.description}</p>
        </div>
    );
};

export default ComponentDetails;

