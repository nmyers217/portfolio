import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import $ from 'jquery';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ name }) => {
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
    }
  `);
  const files = data.allFile.edges.map(e => e.node);
  const image = files.find(f => f.name === name);

  return <Img fluid={image.childImageSharp.fluid} alt="Profile" />;
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
            <div
              id="scaleReveal"
              className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center"
            >
              <div className="big-logo scaleReveal">
                <Image name={content.image} />
              </div>
              <h1 className="scaleReveal">
                {content.title}{' '}
                <span role="img" aria-label={content.titleEmojiLabel}>
                  {content.titleEmoji}
                </span>
              </h1>
              <hr className="bottomReveal" />
              <p className="bottomReveal">
                {content.body}{' '}
                <span role="img" aria-label={content.bodyEmojiLabel}>
                  {content.bodyEmoji}
                </span>
              </p>
              <a href="#skills" data-id="skills" className="scroll-link">
                <div className="scroll-indicator rotateBottomReveal">
                  <span className="ion-mouse"></span>
                  <br />
                  <span className="ion-android-arrow-down arrow-scroll-indicator"></span>
                </div>
              </a>
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
