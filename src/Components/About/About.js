import React from "react";
import "./About.css";
function About() {
    const magnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.add("magnify-5");
      };
    
      const removeMagnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.remove("magnify-5");
      };
  return (
    <div id="about" className="about">
      <div className="container">
        <h1>About Me</h1>
        <p>
          Hi there! <strong>I'm Badia Bouziad</strong>, a passionate web developer with a knack
          for crafting all sorts of websites. At 22 years old, I've already
          honed my skills in various areas of web development. I hold a <strong>Master's degree </strong>
        in Computer Science, specializing in creating <strong>robust and
          efficient</strong> web applications. My journey into the world of coding began
          with <strong>HTML</strong> and <strong>CSS</strong>, and since then, I've expanded my expertise to
          include a variety of technologies. Such as <strong>React js , Node.js , SCSS , SQL , Python .</strong>
        </p>
        <div className="learned-tech">
        <img src="/IMG/html5-svgrepo-com.svg" alt="Your GIF"  className="techs"   onMouseOver={magnify5}  onMouseOut={removeMagnify5}/>
        <img src="/IMG/scss-svgrepo-com.svg" alt="Your GIF" className="techs"    onMouseOver={magnify5}  onMouseOut={removeMagnify5}/>
        <img src="/IMG/react-svgrepo-com.svg" alt="Your GIF"  className="techs"   onMouseOver={magnify5}  onMouseOut={removeMagnify5}/>
        <img src="/IMG/node-fill-svgrepo-com.svg" alt="Your GIF" className="techs"   onMouseOver={magnify5}   onMouseOut={removeMagnify5}/>
        <img src="/IMG/sql-svgrepo-com.svg" alt="Your GIF"  className="techs"   onMouseOver={magnify5}  onMouseOut={removeMagnify5}/>
        </div>
      </div>
    </div>
  );
}

export default About;
