
import React from 'react';
import { Link } from 'react-router-dom'; // React Router Link kullanımı için
import './TechnicalDetails.css'; // CSS dosyasını import ediyoruz
import model from '../gorsel/mikroişlemci.jpg';

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
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
                    Mikroişlemci ve Yazılım modeli
                    Yazılım sisteminin nasıl tasarlandığını, geliştirildiğini, test edildiğini ve nasıl çalıştığını tanımlayan bir çerçevedir. Kısaca yazılım geliştirme süreçlerini düzenlemek ve geliştirilen sistemi anlamak için bir rehber gibi düşünülebilir. Biz de bu Yazılım Modellerinden V Modelini ekledik.
                </p>
                <img src={model} alt="Mikroişlemci Yazılım Modeli" className="model-image" />
            </section>

            <section className="code-section">
                <h2>Yazılım Kodları</h2>
                <p>
                    Bu Python kodu, Rasspberry pi üzerinde çalışan bir otopark yönetim sistemidir. Kodumuz 5 IR kızılötesi hareket sensörü 1 adet 16x2 LCD ekran 1 adet servo motor kullanır kod akışı ise şöyledir: 2 IR sensörü araç giriş çıkışını takip etmek için kullanılır. İlk sensör tetiklendiğinde servo motora bağlı olan bariyer açılır 2.IR sensörün tetiklendiğinde araç sayısı değişkeni 1 arttırılır.Çıkış yapılacağı zaman ise 2.IR sensörü önce tetiklenir bariyer açılır 1.IR tetiklendiğinde ise araç sayısı 1 azaltılır . 3 adet olan park yeri IR sensörleri tarafından dolu - boş kontrolü yapılır ve o an ki slot durumu LCD ekrana yazılır . MAX araç sayısına ulaşıldığında ise bariyer açılmaz ekranımıza araç sayısı ve slot durumu yazdırılır.
                </p>
                <pre>
                    {`import RPi.GPIO as GPIO
import time
from RPLCD.i2c import CharLCD

lcd=('PCF8574',0x27)
I2C_ADDRESS = 0x27
lcd = CharLCD(i2c_expander='PCF8574', address=I2C_ADDRESS, port=1, cols=16, rows=2)

IR_Entry=37
IR_Exit=36
ServoPin=12
IR_SENSOR_SLOT_1_PIN = 31
IR_SENSOR_SLOT_2_PIN = 33
IR_SENSOR_SLOT_3_PIN = 11

aracSayisi=0
MAX_CARS=3

GPIO.setmode(GPIO.BOARD)
GPIO.setup(IR_Entry,GPIO.IN)
GPIO.setup(IR_Exit,GPIO.IN)
GPIO.setup(ServoPin, GPIO.OUT)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(IR_SENSOR_SLOT_1_PIN, GPIO.IN)
GPIO.setup(IR_SENSOR_SLOT_2_PIN, GPIO.IN)
GPIO.setup(IR_SENSOR_SLOT_3_PIN, GPIO.IN)

servo = GPIO.PWM(ServoPin, 50)
servo.start(0)


Entry=False
Exit=False

def bariyer_ac():
    servo.ChangeDutyCycle(7)
    time.sleep(1.2)
    servo.ChangeDutyCycle(0)
def bariyer_kapat():
    servo.ChangeDutyCycle(2)
    time.sleep(1.2)
    servo.ChangeDutyCycle(0)
    

# LCD Güncelleme Fonksiyonu
def update_lcd( slot_1_occupied,  slot_2_occupied,  slot_3_occupied, aracSayisi):
    lcd.clear()
    slot_1_text = "D" if not slot_1_occupied else "B"  # "D" = Dolu, "B" = Boş
    slot_2_text = "D" if not slot_2_occupied else "B"
    slot_3_text = "D" if not slot_3_occupied else "B" if MAX_CARS == 3 else "-"
    lcd.cursor_pos = (0, 0)
    lcd.write_string(f"S1:{slot_1_text} S2:{slot_2_text} S3:{slot_3_text}")
    park_status = "DOLU" if aracSayisi >= MAX_CARS else "BOS"
    lcd.cursor_pos = (1, 0)
    lcd.write_string(f"Arac:{aracSayisi}/{MAX_CARS} {park_status}")

try:
    while True:
        if GPIO.input(IR_Entry)==0 and not Entry and not Exit and aracSayisi < 3:
            time.sleep(0.2)
            Entry=True
            print("Giris icin bariyer aciliyor.")
            bariyer_ac()
            aracSayisi=aracSayisi+1
        elif GPIO.input(IR_Entry)==1 and  GPIO.input(IR_Exit)==0 and Entry :
            time.sleep(0.5)
            Entry=False
            print("Bariyer Kapandi")
            bariyer_kapat()
            print("Arac Sayisi: ",aracSayisi)
            time.sleep(1)
        elif GPIO.input(IR_Exit)==0 and not Exit and not Entry :
            time.sleep(0.2)
            Exit=True
            
            print("Cikis icin bariyer aciliyor.")
            bariyer_ac()
            aracSayisi=aracSayisi-1
        elif  GPIO.input(IR_Exit)==1 and GPIO.input(IR_Entry)==0 and Exit:
            time.sleep(0.5)
            Exit=False
            print("Bariyer Kapandi")
            bariyer_kapat()
            print("Arac Sayisi: ",aracSayisi)
            time.sleep(1)
        slot_1_occupied = GPIO.input(IR_SENSOR_SLOT_1_PIN) 
        slot_2_occupied = GPIO.input(IR_SENSOR_SLOT_2_PIN) 
        slot_3_occupied = GPIO.input(IR_SENSOR_SLOT_3_PIN) 
        update_lcd(slot_1_occupied, slot_2_occupied, slot_3_occupied, aracSayisi)
except KeyboardInterrupt:
    print("Program sonlandırıldı.")
    lcd.clear()  # LCD Ekranı Temizle
finally:
    GPIO.cleanup()`}
                </pre>
                <p>
                    Bu kod ESP32S kartı üzerine kurulmuş akıllı park sensörü sistemi uygulamasıdır. Uygulamamızda önde ve arkada olmak üzere 2 adet mesafe sensörümüz vardır kodumuzda ayarladığımız gibi hangi sensörün ölçtüğü mesafe daha küçükse o mesafe dikkate alınır ve geri bildirim için Buzzer kullanılarak sesli geri bildirim ayrıca mesafenin durumuna göre ledle görsel geri bildirim verilir .
                </p>
                <pre>
                    {`#include <Arduino.h>

// Pin tanımlamaları
#define F_TRIG 22
#define F_ECHO 23
#define B_TRIG 19
#define B_ECHO 21
#define BUZZER 18
#define RED 25
#define BLUE 26
#define GREEN 27

void setup() {
  Serial.begin(115200);

  pinMode(F_TRIG, OUTPUT);
  pinMode(F_ECHO, INPUT);
  pinMode(B_TRIG, OUTPUT);
  pinMode(B_ECHO, INPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(RED, OUTPUT);
  pinMode(BLUE, OUTPUT);
  pinMode(GREEN, OUTPUT);

  digitalWrite(BUZZER, LOW); 
  Serial.println("Mesafe ölçümüne başlanıyor.");
}

double calculateDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH, 30000); 
  if (duration == 0) {
    Serial.println("Zaman aşımı!");
    return 999; 
  }

  double distance = (duration * 0.034) / 2; 
  return distance;
}

void controlBuzzerAndLED(float distance, int triggerDistance) {
  if (distance <= triggerDistance) {
    int beepInterval = map(distance, 1, 30, 200, 50);
    int beepFreq = map(distance, 1, 30, 2000, 1000);

    for (int i = 0; i < 5; i++) {
      tone(BUZZER, beepFreq); 
      delay(beepInterval);    
      noTone(BUZZER);         
      delay(beepInterval);    
    }
  } else {
    noTone(BUZZER);
  }

  digitalWrite(RED, distance <= 10 ? HIGH : LOW);
  digitalWrite(BLUE, distance > 10 && distance <= 20 ? HIGH : LOW);
  digitalWrite(GREEN, distance > 20 && distance <= 30 ? HIGH : LOW);
}

void loop() {
  double fDistance = calculateDistance(F_TRIG, F_ECHO);
  double bDistance = calculateDistance(B_TRIG, B_ECHO);

  Serial.print("Ön Mesafe: ");
  Serial.print(fDistance);
  Serial.println(" cm");
  Serial.print("Arka Mesafe: ");
  Serial.print(bDistance);
  Serial.println(" cm");

  if (fDistance <= bDistance) {
    controlBuzzerAndLED(fDistance, 30);
  } else {
    controlBuzzerAndLED(bDistance, 30);
  }

  delay(100);
}`}
                </pre>
            </section>
        </div>
    );
};

export default TechnicalDetails;
