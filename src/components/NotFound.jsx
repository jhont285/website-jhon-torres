import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <header className="jumbotron" id="notFound">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="text-center"><strong>Not Found</strong></h1>
          <p className="text-center lead"><strong>You can return at home</strong></p>
          <div className="text-center">
            <Link to="/" className="btn btn-default btn-lg" role="button">
              <FontAwesome name="home" /> Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default NotFound;
