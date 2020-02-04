import React from 'react';

const SocialIcon = ({ url, icon }, i) => (
  <a
    key={i}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ paddingRight: 8, fontSize: '3rem' }}
  >
    <span className={icon + ' social-icons-dark-hover'}></span>
  </a>
);

const Footer = ({ config }) => (
  <footer className="background2 footer-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <span className="icon-handle-streamline-vector logo"></span>
          {config.socialIcons.map(SocialIcon)}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-small text-center">
          <hr />
          <button
            type="button"
            className="btn btn-primary btn-up-footer btn-lg scroll-top"
          >
            Up
          </button>
          <p className="no-margin">
            © {new Date().getFullYear()} Nicholas Myers, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
