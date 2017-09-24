import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/"> <span className="glyphicon glyphicon-send" aria-hidden="true"></span>&nbsp;Jhon Torres</Link>
          </div>

          {/* <!-- items --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/roster">
                  <i className="fa fa-keyboard-o" aria-hidden="true"></i> Projects
                </Link>
              </li>
              <li>
                <Link to="/schedule">
                  <i className="fa fa-gamepad" aria-hidden="true"></i> Have fun
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- .narvar-collapse--> */}
        </div>
        {/* <!-- .container --> */}
      </nav>
    );
  }
}

export default Navbar;
