import React from 'react';
// import ReactDOM from 'react-dom';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap';



export default function Navbar({ setCurrentCourse }) {
  return (
    <div className="Navbar">
      <div className="nav-menu">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setCurrentCourse("/pdf/About.pdf")}>Home</button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Science</button>
          <div className="dropdown-content">
            <div className="subject">
              <h1>Biology</h1>

            </div>
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
            <div className="subject">
              <h1>Astronomy</h1>

            </div>
            <div className="subject">
              <h1>Computer</h1>

            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Technology</button>
          <div className="dropdown-content">
            <div className="subject">
              <h1>Operating Systems</h1>

            </div>
            <div className="subject">
              <h1>Programming Languages</h1>

            </div>
            <div className="subject">
              <h1>Software</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/MATLAB.pdf")}>MATLAB</a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Engineering</button>
          <div className="dropdown-content">
            <div className="subject">
              <h1>Chemical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Chempdf.pdf")}>General Chemistry</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Thermodynamics.pdf")}>Thermodynamics</a>
            </div>
            <div className="subject">
              <h1>Electrical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Math for EE.pdf")}>Math for EE</a>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Electronic Circuits.pdf")}>Electronic Circuits</a>
            </div>
            <div className="subject">
              <h1>Mechanical</h1>
              <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + "/pdf/Mechanics.pdf")}>Mechanics</a>
            </div>
            <div className="subject">
              <h1>Computer</h1>
            </div>
            <div className="subject">
              <h1>Civil</h1>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Math</button>
          <div className="dropdown-content">
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
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  );
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
