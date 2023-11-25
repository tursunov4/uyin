import React, { useEffect, useState } from 'react';


const Tost = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // 3 sekundga
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return visible ? <div className="your-toast">{message}</div> : null;
};

export default Tost;