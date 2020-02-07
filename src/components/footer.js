import React from 'react';
import ScrollLink from './scrollLink';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const SocialIcon = ({ url, type }) => {
  let IconComp = <span key={url}>icon not found</span>;
  if (type === 'github') {
    IconComp = IoLogoGithub;
  }
  if (type === 'linkedin') {
    IconComp = IoLogoLinkedin;
  }

  return (
    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
      <IconComp
        size="4rem"
        className="social-icons-dark-hover"
        style={{ paddingRight: 8 }}
      />
    </a>
  );
};

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
          <ScrollLink to="home">
            <button
              type="button"
              className="btn btn-primary btn-up-footer btn-lg"
            >
              Up
            </button>
          </ScrollLink>
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
