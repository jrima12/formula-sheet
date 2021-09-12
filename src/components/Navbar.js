import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap';



export default function Navbar({ setCurrentCourse }) {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const NewMenu = document.querySelector(".NewMenu");

    hamburger.addEventListener("click", mobileMenu);
    NewMenu.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        NewMenu.classList.toggle("active");
    }
    
  }, []);

  return (
    <div className="Navbar">
      <div className="nav-menu">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setCurrentCourse("/pdf/About.pdf")}>Home</button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Science</button>
          <div className="dropdown-content" id="Science-Content">
            <div className="subject">
              <h1>Chemistry</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Chempdf.pdf")}>General Chemistry</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Thermodynamics.pdf")}>Thermodynamics</a>
            </div>
            <div className="subject">
              <h1>Physics</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Mechanics.pdf")}>Mechanics</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Physcspdf.pdf")}>General Physics</a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Technology</button>
          <div className="dropdown-content" id="Technology-Content">
            <div className="subject">
              <h1>Programming</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/MATLAB.pdf")}>MATLAB</a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Engineering</button>
          <div className="dropdown-content" id="Engineering-Content">
            <div className="subject">
              <h1>Chemical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Chempdf.pdf")}>General Chemistry</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Thermodynamics.pdf")}>Thermodynamics</a>
            </div>
            <div className="subject">
              <h1>Electrical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Math for EE.pdf")}>Math for EE</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Electronic Circuits.pdf")}>Circuits</a>
            </div>
            <div className="subject">
              <h1>Mechanical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Mechanics.pdf")}>Mechanics</a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Math</button>
          <div className="dropdown-content" id="Math-Content">
            <div className="subject">
              <h1>Pure Math</h1>
            </div>
            <div className="subject">
              <h1>Calculus</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Differential Equations.pdf")}>Differential Equations</a>
            </div>
            <div className="subject">
              <h1>Number Theory</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + '/pdf/Probability and Statistics.pdf')}>Probability and Statistics</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div className="NewMenu">
        <h1 className="homebtn" onClick={() => setCurrentCourse("/pdf/About.pdf")}>HOME</h1>
        <div className="category">
          <h1 className="STEM">Science</h1>
            <div className="STEM-content">
              <h2 className="type" >Chemistry</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Chempdf.pdf")}>General Chemistry</li>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Thermodynamics.pdf")}>Thermodynamics</li>
            </div>
            <div className="STEM-content">
              <h2 className="type">Physics</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Mechanics.pdf")}>Mechanics</li>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Physcspdf.pdf")}>General Physics</li>
            </div>
        </div>
        <div className="category">
          <h1 className="STEM">Technology</h1>
            <div className="STEM-content">
              <h2 className="type">Programming</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/MATLAB.pdf")}>MATLAB</li>
            </div>
        </div>
        <div className="category">
          <h1 className="STEM">Engineering</h1>
            <div className="STEM-content">
              <h2 className="type">Chemical</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Chempdf.pdf")}>General Chemistry</li>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Thermodynamics.pdf")}>Thermodynamics</li>
            </div>
            <div className="STEM-content">
              <h2 className="type">Electrical</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Math for EE.pdf")}>Math for EE</li>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Electronic Circuits.pdf")}>Circuits</li>
            </div>
            <div className="STEM-content">
              <h2 className="type">Mechanical</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Mechanics.pdf")}>Mechanics</li>
            </div>
        </div>
        <div className="category">
          <h1 className="STEM">Math</h1>
            <div className="STEM-content">
              <h2 className="type">Calculus</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Differential Equations.pdf")}>Differential Equations</li>
            </div>
            <div className="STEM-content">
              <h2 className="type">Number Theory</h2>
              <li className="classes" onClick={() => setCurrentCourse("/pdf/Probability and Statistics.pdf")}>Probability and Statistics</li>
            </div>
        </div>
      </div>
    </div>
  );
}

