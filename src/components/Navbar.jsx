import { Link } from "react-router-dom";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-2"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <span className="glyphicon glyphicon-send" aria-hidden="true" />&nbsp;Jhon Torres
            </Link>
          </div>

          {/* <!-- items --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <FontAwesome name="home" /> Home
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <FontAwesome name="keyboard-o" /> Projects
                </Link>
              </li>
              <li>
                <Link to="/haveFun">
                  <FontAwesome name="gamepad" /> Have fun
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
