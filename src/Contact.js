import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="background1 section-padding">
        <div className="container">
          <div className="row mb30">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 section-title text-center">
              <h2>Contact</h2>
              <span className="section-divider mb15"></span>
              <p className="no-margin scaleReveal">Want to get in touch? You've come to the right place.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-lg-4">
              <h5 className="heading-1 mb20">Email and Phone:</h5>
              <p className="text-xs-small mb5"><strong className="text-switch">Email:</strong> nickbmyers217@gmail.com</p>
              <p className="text-xs-small mb5"><strong className="text-switch">Phone:</strong> 713-320-8787</p>
            </div>
            <div className="col-sm-6 col-lg-7 mt30-xs">
              <form id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <input id="subject" className="form-control" type="text" placeholder="Subject *" />
                        <div className="help-block with-errors">
                          Subject is required.
									      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <input id="phone" className="form-control" placeholder="Phone" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb10">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <input id="name" type="text" className="form-control" placeholder="Your Name *" />
                        <div className="help-block with-errors">
                          Name is required.
									      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <input id="email" type="email" className="email form-control" placeholder="Email *" required />
                        <div className="help-block with-errors">
                          Email address is required.
									      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="controls">
                        <textarea id="message" rows="5" className="form-control" placeholder="Message *">
                        </textarea>
                        <div className="help-block with-errors">
                          Message is required.
									      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt15">
                  <div className="col-sm-6">
                  </div>
                  <div className="col-sm-6 text-right">
                    <button type="submit" id="submit" className="btn btn-primary btn-lg">
                      Send
							      </button>
                  </div>
                  <div className="col-sm-12">
                    <div id="msgSubmit" className="h4 mt10 no-margin-bottom">
                      <div className="alert alert-success revealLeft">
                        I got your message!
								      </div>
                      <div className="alert alert-danger revealLeft">
                        There was a problem. Please try again.
								      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;