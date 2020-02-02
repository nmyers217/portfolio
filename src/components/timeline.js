import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Experience = ({ image, imageData, heading, subheading, body }, i) => (
  <li key={i} className={i % 2 > 0 ? 'timeline-inverted' : ''}>
    <div className="timeline-image scaleReveal">
      <Img fluid={imageData.childImageSharp.fluid} alt={heading} />
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

const Timeline = ({ experiences }) => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      allFile(filter: { relativeDirectory: { eq: "timeline" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const files = data.allFile.edges.map(e => e.node);
  const experiencesWithImageData = experiences.map(e => {
    return Object.assign({}, e, {
      imageData: files.find(f => f.name === e.image)
    });
  });

  return (
    <section id="experience" className="background1 section-padding-top">
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
              {experiencesWithImageData.map(Experience)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Timeline.propTypes = {
  experiences: PropTypes.array
};

Timeline.defaultProps = {
  experiences: []
};

export default Timeline;
