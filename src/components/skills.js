import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';

const Icon = (icon, i) => (
  <span
    key={i.toString()}
    className={icon + ' services-icon'}
    style={{ paddingRight: 8 }}
  ></span>
);

const Skill = ({ icons, title, desc }, i) => (
  <div key={i.toString()} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30">
    <Fade top>
      <div className="services-box">
        <span>{icons.map(Icon)}</span>
        <h3 className="service-name">{title}</h3>
        <p className="text-small">{desc}</p>
      </div>
    </Fade>
  </div>
);

const Skills = ({ skills }) => (
  <section id="skills" className="background2 section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 section-title text-center">
          <h2>Skills</h2>
          <span className="section-divider"></span>
        </div>
      </div>
      <div className="row">{skills.map(Skill)}</div>
    </div>
  </section>
);

Skills.propTypes = {
  skills: PropTypes.array
};

Skills.defaultProps = {
  skills: []
};

export default Skills;
