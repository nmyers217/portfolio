import PropTypes from 'prop-types';
import React from 'react';
import ScrollLink from './scrollLink';

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="row">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <ScrollLink brand={true} to="home">
              <span className="logo">{siteTitle}</span>
            </ScrollLink>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <ScrollLink to="home">Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="skills">Skills</ScrollLink>
              </li>
              <li>
                <ScrollLink to="experience">Experience</ScrollLink>
              </li>
              <li>
                <ScrollLink to="work">Projects</ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact">Contact</ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
