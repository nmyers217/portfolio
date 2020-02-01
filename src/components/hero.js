import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Particles from 'react-particles-js';
import $ from 'jquery';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Profile" />
  );
};

class Hero extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      width: 400,
      height: 400
    };
  }

  updateDimensions() {
    this.setState({
      width: $(window).width(),
      height: $(window).height()
    });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { width, height } = this.state;

    return (
      <div
        className="jumbotron jumbotron-main"
        id="home"
        ref={jumbo => (this.jumbo = jumbo)}
        style={{ width, height }}
      >
        <div id="particles-js">
          <Particles params={this.props.config} wdith={width} height={height} />
        </div>
        <div className="container center-vertically-holder">
          <div className="center-vertically">
            <div
              id="scaleReveal"
              className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center"
            >
              <div className="big-logo scaleReveal">
                <Image />
              </div>
              <h1 className="scaleReveal">Hi, I'm Nick 👋</h1>
              <hr className="bottomReveal" />
              <p className="bottomReveal">
                I'm a Full Stack Web Developer in the Houston, TX area with 4+
                years of industry experience. I have am always curious and
                driven to explore programming and technology 🤖
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

export default Hero;
