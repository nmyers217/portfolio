import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import $ from 'jquery';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Bounce from 'react-reveal/Bounce';
import ScrollLink from './scrollLink';

const Bio = ({ content }) => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allFile(filter: { relativeDirectory: { eq: "hero" } }) {
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

      github {
        viewer {
          bio
        }
      }
    }
  `);
  const files = data.allFile.edges.map(e => e.node);
  const image = files.find(f => f.name === content.image);

  return (
    <>
      <Bounce top>
        <div className="big-logo">
          <Img fluid={image.childImageSharp.fluid} alt="Profile" />
        </div>
        <h1>
          {content.title}{' '}
          <span role="img" aria-label={content.titleEmojiLabel}>
            {content.titleEmoji}
          </span>
        </h1>
      </Bounce>
      <Bounce bottom>
        <hr />
        <p>
          {data.github.viewer.bio}{' '}
          <span role="img" aria-label={content.bioEmojiLabel}>
            {content.bioEmoji}
          </span>
        </p>
      </Bounce>
    </>
  );
};

class Hero extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = { width: 400, height: 400 };
  }

  updateDimensions() {
    this.setState({
      width: $(window).width(),
      height: $(window).height()
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { content, particlesConfig } = this.props;
    const { width, height } = this.state;

    return (
      <div
        className="jumbotron jumbotron-main"
        id="home"
        style={{ width: width - 1, height }}
      >
        <div id="particles-js">
          <Particles params={particlesConfig} />
        </div>
        <div className="container center-vertically-holder">
          <div className="center-vertically">
            <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center">
              <Bio content={content} />
              <ScrollLink to="skills">
                <Bounce bottom>
                  <div className="scroll-indicator">
                    <span className="ion-mouse"></span>
                    <br />
                    <span className="ion-android-arrow-down arrow-scroll-indicator"></span>
                  </div>
                </Bounce>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  content: PropTypes.object,
  particlesConfig: PropTypes.object
};

Hero.defaultProps = {
  content: {},
  particlesConfig: []
};

export default Hero;
