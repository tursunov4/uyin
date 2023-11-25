import React, { useEffect, useState } from 'react';


const Tosterr = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2000); // 3 sekundga
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return visible ? <div className="your-toast__err">{message}</div> : null;
};

export default Tosterr;