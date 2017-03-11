import React from 'react';

// TODO: Update my resume
// TODO: Fix the padding of the social icons
const Footer = () => (
  <footer className="background2 footer-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <span className="icon-handle-streamline-vector logo"></span>
          <h2 className="theme-title">
            <a href="resume.pdf" target="_blank" className="theme-title-smaller">
              My Resume
          </a>
          </h2>
          <a href="https://www.linkedin.com/in/nicholasmyers217" target="_blank"><span className="ion-social-linkedin social-icons-dark-hover"></span></a>
          <a href="https://github.com/nickmyers217" target="_blank"><span className="ion-social-github social-icons-dark-hover"></span></a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-small text-center">
          <hr />
          <button type="button" className="btn btn-primary btn-up-footer btn-lg scroll-top">Up</button>
          <p className="no-margin">&copy; Nicholas Myers</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;