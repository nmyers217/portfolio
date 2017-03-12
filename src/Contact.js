import React, { Component } from 'react';

const Validation = ({ message }) => (
  <div className="help-block with-errors" style={{color: 'red', fontSize: '12px'}}>
    {message}
  </div>
);

const TextField = ({ cols=6, type='text', rows=5, name, isTouched, isRequired, isValid }) => (
  <div className={'col-sm-' + cols}>
    <div className="form-group">
      <div className="controls">
        { type === 'text'
          ? <input id={name} className="form-control" type="text"
              placeholder={isRequired ? name + ' *' : name}
              style={isTouched && !isValid ? { borderBottom: '2px solid red' } : {}} />
          : <textarea id={name} rows={rows} className="form-control" placeholder={isRequired ? name + ' *' : name}
              style={isTouched && !isValid ? { borderBottom: '2px solid red' } : {}}></textarea>
        }
        { isTouched && isRequired && !isValid &&
          <Validation message={`${name} is required.`} />
        }
      </div>
    </div>
  </div>
);

const SubmitButton = ({ text, disabled }) => (
  <button type="submit" id="submit" className="btn btn-primary btn-lg" disabled={disabled}>
    {text}
  </button>
);

const Alert = ({ type, message, isVisible }) => (
  <div>
    { isVisible
      ? <div className={`alert ${type} revealLeft`}>{ message }</div>
      : <div></div>
    }
  </div>
);

class ContactForm extends Component {
  // TODO: Set the default state of the form and bind event handlers
  /*
  constructor() {

  }
  */

  // TODO: Write form submission code
  /*
  formSpreeSubmit() {
    const url = 'https://formspree.io/nickbmyers217@gmail.com';
    const data = {
      message: `
        Subject: ${formData.subject}
        Name:    ${formData.name}
        Email:   ${formData.email}
        Phone:   ${formData.phone}

        ${formData.message}
      `
    }

    return this.http.post(url, data).map(res => res.json())
  }
  */

  // TODO: Write form validation code
  render() {
    return (
      <form id="contactForm" name="contactForm">
        <div className="row">
          <TextField name="Subject" isTouched={false} isRequired={true} isValid={true} />
          <TextField name="Phone" isTouched={false} isRequired={false} isValid={true} />
        </div>
        <div className="row mb10">
          <TextField name="Name" isTouched={false} isRequired={true} isValid={true} />
          <TextField name="Email" isTouched={false} isRequired={true} isValid={true} />
        </div>
        <div className="row">
          <TextField type="textArea" cols={12} name="Message" isTouched={false} isRequired={true} isValid={true} />
        </div>
        <div className="row mt15">
          <div className="col-sm-6">
          </div>
          <div className="col-sm-6 text-right">
            <SubmitButton text="Send" disabled={true} />
          </div>
          <div className="col-sm-12">
            <div id="msgSubmit" className="h4 mt10 no-margin-bottom">
              <Alert type="alert-success" message="I got your message!" isVisible={false} />
              <Alert type="alert-danger" message="There was a problem. Please try again." isVisible={false} />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const Contact = () => (
  <section id="contact" className="background1 section-padding" onChange={contact => console.log(contact)}>
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
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;