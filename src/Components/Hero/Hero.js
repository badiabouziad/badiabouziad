import React from 'react'
import './Hero.css'
function Hero() {
    const magnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.add('magnify-5');
      };
    
      const removeMagnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.remove('magnify-5');
      };
  return (
    <div className='main-text' id='hero'>
      <div>

        Hello there , I'm <span onMouseOver={magnify5} onMouseOut={removeMagnify5}>Badia</span> <br></br>and I'm here to enhance your presence<br></br> Online .
      </div>
    </div>
  )
}

export default Hero