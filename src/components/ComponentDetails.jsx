import React from 'react';
import { useParams } from 'react-router-dom'; // Parametreleri almak için
import './ComponentDetails.css';

const componentData = {
    "raspberry-pi-3": {
        name: "Raspberry Pi 3",
        image: "../gorsel/raspberry.jpg",
        description: "Raspberry Pi 3, düşük maliyetli bir bilgisayar kartıdır. Projede mikroişlemci olarak kullanılmıştır.",
    },
    "ultrasonik-sensor": {
        name: "Ultrasonik Mesafe Ölçüm Sensörü",
        image: "../gorsel/sensor.jpeg",
        description: "HC-SR04, mesafe ölçümü yapmak için kullanılan bir ultrasonik sensördür.",
    },
    "led-gostergeler": {
        name: "LED Göstergeler",
        image: "../gorsel/led.jpg",
        description: "Projedeki görsel geri bildirim için kullanılan LED ışıklar.",
    },
    "buzzer": {
        name: "Buzzer",
        image: "../gorsel/buzzer.jpg",
        description: "Buzzer, sesli geri bildirim sağlayan bir elektronik cihazdır.",
    },
    "servo-motor": {
        name: "SG90 Servo Motor",
        image: "../gorsel/servo.jpg",
        description: "SG90 Servo Motor, bariyer kontrolü için kullanılan bir motordur.",
    },
    "iralici-verici sensor": {
        name: "IR Alıcı-Verici Sensör",
        image: "../gorsel/servo.jpg",
        description: "SG90 Servo Motor, bariyer kontrolü için kullanılan bir motordur.",
    }, "esp": {
        name: "SG90 Servo Motor",
        image: "../gorsel/servo.jpg",
        description: "SG90 Servo Motor, bariyer kontrolü için kullanılan bir motordur.",
    }, "mesafe": {
        name: "SG90 Servo Motor",
        image: "../gorsel/servo.jpg",
        description: "SG90 Servo Motor, bariyer kontrolü için kullanılan bir motordur.",
    },
};

const ComponentDetails = () => {
    const { componentId } = useParams(); // URL parametresinden bileşen kimliği alınır
    const component = componentData[componentId];

    if (!component) {
        return <p>Bileşen bulunamadı.</p>;
    }

    return (
        <div className="component-details-container">
            <h1>{component.name}</h1>
            <img src={component.image} alt={component.name} />
            <p>{component.description}</p>
        </div>
    );
};

export default ComponentDetails;
