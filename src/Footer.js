import React from 'react';

const SocialIcon = ({ url, icon }, i) => (
  <a key={i} href={url} target="_blank" style={{paddingRight: 8}}>
    <span className={icon + ' social-icons-dark-hover'}></span>
  </a>
);

const Footer = ({ resumePath, socialIcons }) => (
  <footer className="background2 footer-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <span className="icon-handle-streamline-vector logo"></span>
          <h2 className="theme-title">
            <a href={resumePath} target="_blank" className="theme-title-smaller">
              My Resume
          </a>
          </h2>
          { socialIcons.map(SocialIcon) }
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