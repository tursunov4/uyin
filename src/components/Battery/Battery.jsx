import React, { useEffect, useState } from 'react'
import "./main.css"
const Battery = () => {
    const [batteryPercentage, setBatteryPercentage] = useState(50);

    const [batareyaFoizi, setBatareyaFoizi] = useState(null);

    useEffect(() => {
      const getBatareyaMalumotlari = async () => {
        try {
          const batareyaMalumotlari = await navigator.getBattery();
          setBatareyaFoizi(batareyaMalumotlari.level * 100); // Batareya fozi, 0% dan 100% gacha bo'lgan son formatida
        } catch (error) {
          console.error("Batareya ma'lumotlarini olishda xatolik yuz berdi:", error);
        }
      };
  
      getBatareyaMalumotlari();
  
      // Interval orqali har bir necha soniyada batareya ma'lumotlarini yangilash uchun
      const intervalId = setInterval(() => {
        getBatareyaMalumotlari();
      }, 1000); // 1 daqiqa
  
      // Komponent bekor qilindiğida intervalni o'chiramiz
      return () => clearInterval(intervalId);
    }, []);
    const batteryStyle = {
        border: '2px solid white',  
        height: '10px',
        width: '20px',
        position: 'relative',
      };

      const indicatorStyle = {
        height: '100%',
        width: `${batareyaFoizi}%`,
        background: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
      };
  return (
    <div className='battary__wrap' style={batteryStyle}>
    <div className='battary__bottom'>
    </div>
   <div style={indicatorStyle}></div>
 </div>
  )
}

export default Battery