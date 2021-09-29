import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap';
import data from "./data.json";


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
        {data.map((sheetlist) => {
          return (
            <div className="dropdown">
              <button className="dropbtn">{sheetlist.title}</button>
              <div className="dropdown-content">
                {sheetlist.type.map(typeOBJ => (
                  <div className="subject">
                    <h1>{typeOBJ.Category}</h1>
                    {typeOBJ.Classes.map(classesOBJ => (
                      <a onClick={() => setCurrentCourse(process.env.PUBLIC_URL + classesOBJ.pdfpath)}>{classesOBJ.name}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div className="NewMenu">
        <h1 className="homebtn" onClick={() => setCurrentCourse("/pdf/About.pdf")}>HOME</h1>
        {data.map((sheetlist) => {
          return (
            <div className="category">
              <h1 className="STEM">{sheetlist.title}</h1>
              {sheetlist.type.map(typeOBJ => (
                <div className="STEM-content">
                  <h2 className="type" >{typeOBJ.Category}</h2>
                  {typeOBJ.Classes.map(classOBJ => (
                    <li className="classes" onClick={() => setCurrentCourse(process.env.PUBLIC_URL + classOBJ.pdfpath)}>{classOBJ.name}</li>
                  ))}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  );
}

