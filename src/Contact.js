import React, { Component } from 'react';

const Alert = ({ type, message }) => (
  <div className={`alert ${type} revealLeft`}>
    {message}
  </div>
);

const Validation = ({ message }) => (
  <div className="help-block with-errors" style={{color: 'red', fontSize: '12px'}}>
    {message}
  </div>
);

const TextField = ({ name, isTouched, isRequired, isValid }) => (
  <div>
    <input id={name} className="form-control" type="text" placeholder={isRequired ? name + ' *' : name}
      style={isTouched && !isValid ? {borderBottom: '2px solid red'} : {}} />
    { isTouched && isRequired && !isValid && <Validation message={`${name} is required.`} /> }
  </div>
);

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
                        <TextField name="Subject" isTouched={true} isRequired={true} isValid={false} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <TextField name="Phone" isTouched={false} isRequired={false} isValid={true} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb10">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <TextField name="Name" isTouched={false} isRequired={true} isValid={true} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="controls">
                        <TextField name="Email" isTouched={false} isRequired={true} isValid={true} />
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
                        <Validation message="Message is required." />
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
                      <Alert type="alert-success" message="I got your message!" />
                      <Alert type="alert-danger"  message="There was a problem. Please try again." />
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