import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid" id="netContact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 showWithButtom">
                <br />
                <h1 className="text-center">
                  I <FontAwesome name="heart" /> new friends!
                </h1>
                <ul className="text-center list-inline">
                  <li>
                    <a href="https://github.com/JhonEmmanuelTorres" target="_blank" rel="noopener noreferrer">
                      <FontAwesome name="github" size="4x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/jhetorresto" target="_blank" rel="noopener noreferrer">
                      <FontAwesome name="twitter" size="4x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/user/jhont285/" target="_blank" rel="noopener noreferrer">
                      <FontAwesome name="reddit" size="4x" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h1 className="text-center">Put footer</h1>

                <ul className="fa-ul" id="reference">
                  <li><i className="fa-li fa fa-map-marker" />Bogotá, Colombia</li>
                  <li><i className="fa-li fa fa-envelope-o" />jhont285@gmail.com</li>
                  <li><i className="fa-li fa fa-envelope-o" />jhetorresto@unal.edu.com</li>
                  <li><i className="fa-li fa fa-phone" />680 80 80</li>
                  <li><i className="fa-li fa fa-mobile" />310 281 80 80</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container text-center">
            <p>Copyright &copy; My Personal WebSite</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
