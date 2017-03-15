import React from 'react';

const Experience = ({ image, heading, subheading, body }, i) => (
  <li key={i} className={i % 2 > 0 ? 'timeline-inverted' : ''}>
    <div className="timeline-image scaleReveal">
      <img alt="" className="img-circle img-responsive" src={image} />
    </div>
    <div className="timeline-panel leftReveal">
      <div className="timeline-heading">
        <h5 className="heading-1 mb15">{heading}</h5>
        <h4 className="subheading">{subheading}</h4>
      </div>
      <div className="timeline-body">
        <p>{body}</p>
      </div>
    </div>
  </li>
);

const Timeline = ({ experiences }) => (
  <section id="experience" className="background2 section-padding-top">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 section-title text-center">
          <h2>Experience</h2>
          <span className="section-divider"></span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline pb80">
            { experiences.map(Experience) }
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
