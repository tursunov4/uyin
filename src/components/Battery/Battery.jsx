import React, { useEffect, useState } from 'react'
import "./main.css"
const Battery = () => {
    const [batteryPercentage, setBatteryPercentage] = useState(50);

    useEffect(() => {
      const batteryStatusHandler = (event) => {
        const { level } = event?.target;
        setBatteryPercentage((level * 100).toFixed(2));
      };
  
      navigator?.getBattery()?.then((battery) => {
        // Initial battery percentage
        setBatteryPercentage((battery.level * 100)?.toFixed(2));
  
        // Subscribe to battery status changes
        battery.addEventListener('levelchange', batteryStatusHandler);
      });
  
      return () => {
        // Cleanup: remove event listener when component unmounts
        navigator?.getBattery()?.then((battery) => {
          battery?.removeEventListener('levelchange', batteryStatusHandler);
        });
      };
    }, []); 

    const batteryStyle = {
        border: '2px solid white',  
        height: '10px',
        width: '20px',
        position: 'relative',
      };

      const indicatorStyle = {
        height: '100%',
        width: `${batteryPercentage}%`,
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