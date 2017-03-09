import React from 'react';

const Navbar = (props) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="row">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand scroll-link" href="#home" data-id="home">
            <span className="logo">{ props.brand }</span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" data-id="home" className="scroll-link">Home</a>
            </li>
            <li>
              <a href="#skills" data-id="skills" className="scroll-link">Skills</a>
            </li>
            <li>
              <a href="#work" data-id="work" className="scroll-link">Work</a>
            </li>
            <li>
              <a href="#experience" data-id="experience" className="scroll-link">Experience</a>
            </li>
            <li>
              <a href="#contact" data-id="contact" className="scroll-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;