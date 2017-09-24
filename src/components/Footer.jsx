import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid" id="netContact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 showWithButtom">
                <br />
                <h1 className="text-center">I <i className="fa fa-heart" aria-hidden="true"></i> new friends!</h1>
                <ul className="text-center list-inline">
                  <li><a href="https://github.com/JhonEmmanuelTorres" target="_blank"><i className="fa fa-github fa-4x" aria-hidden="true"></i></a></li>
                  <li><a href="https://twitter.com/jhetorresto" target="_blank"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.reddit.com/user/jhont285/" target="_blank"><i className="fa fa-reddit fa-4x" aria-hidden="true"></i></a></li>
                </ul>
              </div>

              <div className="col-md-6">
                <h1 className="text-center">Contact</h1>

                <ul className="fa-ul" id="reference">
                  <li><i className="fa-li fa fa-map-marker"></i>Bogotá, Colombia</li>
                  <li><i className="fa-li fa fa-envelope-o"></i>jhont285@gmail.com</li>
                  <li><i className="fa-li fa fa-envelope-o"></i>jhetorresto@unal.edu.com</li>
                  <li><i className="fa-li fa fa-envelope-o"></i>je.torres@uniandes.edu.co</li>
                  <li><i className="fa-li fa fa-phone"></i>680 80 80</li>
                  <li><i className="fa-li fa fa-mobile"></i>310 281 80 80</li>
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
