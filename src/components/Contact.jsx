import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import swal from 'sweetalert';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    swal('Email was send successfull!!!');
    this.setState({ name: '', email: '', phone: '', message: '' });
    event.preventDefault();
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
                <div className="form-group">
                  <label htmlFor="userName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    htmlFor="userEmail"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userPhone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    htmlFor="userPhone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
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
                      />
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
