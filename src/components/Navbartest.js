import React from 'react';
// import ReactDOM from 'react-dom';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap';

export default function Navbar({ setCurrentCourse }) {
    return (
            <div className="navbar">
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a class="nav-link" onClick={() => setCurrentCourse("/pdf/About.pdf")}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Science</a>
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
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Technology</a>
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
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Engineering</a>
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
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Math</a>
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
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
    );
}