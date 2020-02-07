import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ brand = false, to, children }) => (
  <Link
    className={brand ? 'navbar-brand' : ''}
    activeClass="active"
    style={{ cursor: 'pointer' }}
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={750}
  >
    {children}
  </Link>
);

export default ScrollLink;
