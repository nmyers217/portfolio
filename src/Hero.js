import React, { Component } from 'react';
import $ from 'jquery';

import Particles from 'react-particles-js';

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
      <div className="jumbotron jumbotron-main" id="home" ref={jumbo => this.jumbo = jumbo} style={{width, height}}>
        <div id="particles-js">
          <Particles params={this.props.config} wdith={width} height={height} />
        </div>
        <div className="container center-vertically-holder">
          <div className="center-vertically">
            <div id="scaleReveal" className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center">
              <div className="big-logo scaleReveal">
                <img src="images/Me.jpg" alt="Profile" />
              </div>
              <h1 className="scaleReveal">Hi, I'm Nick</h1>
              <hr className="bottomReveal" />
              <p className="bottomReveal">I'm a Full Stack Web Developer in the Houston, TX area who is very passionate about programming and technology. In my free time I can be found watching scifi movies and envisioning the future.</p>
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