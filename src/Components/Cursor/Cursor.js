import React, { useState, useEffect } from 'react';
import './Cursor.css'; // Assuming you have CSS file for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="invertedcursor" id='cursor' style={{ left: position.x, top: position.y }} />
  );
};

export default Cursor;
