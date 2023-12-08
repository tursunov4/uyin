import React, { useState, useEffect } from 'react';
import battary from "../../assets/Images/Svg/battary.svg"
import Battery from '../Battery/Battery';
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className='clock-wrap'>
      <Battery />
      <p className='clock__text'>{formatTime(currentTime)}</p>
    </div>
  );
};

export default Clock;
