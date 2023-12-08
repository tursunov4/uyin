import React, { useEffect, useState } from 'react'
import "./main.css"
const Battery = () => {
    const [batteryPercentage, setBatteryPercentage] = useState(50);


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