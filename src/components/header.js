import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Row } from 'react-bootstrap';
import ScrollLink from './scrollLink';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar fluid fixedTop className="">
      <Row>
        <Navbar.Header>
          <Navbar.Brand>
            <ScrollLink brand={true} to="home">
              <span className="logo">{siteTitle}</span>
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
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
          </Nav>
        </Navbar.Collapse>
      </Row>
    </Navbar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
