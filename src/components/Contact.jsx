import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import swal from 'sweetalert';
import validator from 'validator';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      hasErrorName: false,
      hasErrorEmail: false,
      hasErrorPhone: false,
      hasErrorMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeInput(event) {
    const word = event.target.name;
    this.setState({ [`hasError${word.charAt(0).toUpperCase() + word.slice(1)}`]: false });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.state.name.length || !validator.isAscii(this.state.name)) {
      await this.setState({ hasErrorName: true });
    }
    if (!this.state.email.length || !validator.isEmail(this.state.email)) {
      await this.setState({ hasErrorEmail: true });
    }
    if (!this.state.phone.length || !validator.isNumeric(this.state.phone)) {
      await this.setState({ hasErrorPhone: true });
    }
    if (!this.state.message.length || !validator.isAscii(this.state.message)) {
      await this.setState({ hasErrorMessage: true });
    }

    const fields = ['Name', 'Email', 'Phone', 'Message'];
    if (fields.every(item => !this.state[`hasError${item}`])) {
      swal('Email was send successfull!!!');
      fields.forEach(item => this.setState({ [item.toLowerCase()]: '' }));
      fields.forEach(item => this.setState({ [`hasError${item}`]: false }));
    } else {
      swal('There are one or more errors');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <p>
                Want to get in touch with me? Fill out
                the form below to send me a message and
                I will try to get back to you within 24 hours!
              </p>

              <form onSubmit={this.handleSubmit}>
                <div className={!this.state.hasErrorName ? 'form-group' : 'form-group has-error'}>

                  <label htmlFor="userName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onClick={this.handleChangeInput}
                  />

                  {
                    !this.state.hasErrorName ||
                    <span className="help-block"> * The name is empty or is invalid</span>
                  }

                </div>
                <div className={!this.state.hasErrorEmail ? 'form-group' : 'form-group has-error'}>
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    htmlFor="userEmail"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onClick={this.handleChangeInput}
                  />

                  {
                    !this.state.hasErrorEmail ||
                    <span className="help-block"> * The email is empty or is invalid</span>
                  }

                </div>
                <div className={!this.state.hasErrorPhone ? 'form-group' : 'form-group has-error'}>
                  <label htmlFor="userPhone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    htmlFor="userPhone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    onClick={this.handleChangeInput}
                  />

                  {
                    !this.state.hasErrorPhone ||
                    <span className="help-block"> * The phone is empty or isn&apos;t a number</span>
                  }

                </div>
                <div className={!this.state.hasErrorMessage ? 'form-group' : 'form-group has-error'}>
                  <label htmlFor="userMessage">Message</label>
                  <div className="row">
                    <div className="col-xs-12">
                      <textarea
                        className="form-control"
                        rows="3"
                        htmlFor="userMessage"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        onClick={this.handleChangeInput}
                      />

                      {
                        !this.state.hasErrorMessage ||
                        <span className="help-block">
                          * The message is empty or isn&apos;t invalid
                        </span>
                      }

                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <button type="submit" className="btn btn-primary">
                    Send <FontAwesome name="paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Header = () => (
  <header className="jumbotron" id="headerContact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Contact Me</h1>
          <p className="text-center lead">Have questions? I have answers (maybe).</p>
        </div>
      </div>
    </div>
  </header>
);

export default Contact;
