import React from "react";

const HaveFun = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header className="jumbotron" id="headerHaveFun">
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <h1>Have fun</h1>
          <p className="lead">with game &quot;Code puzzle&quot;</p>
        </div>
      </div>
    </div>
  </header>
);

export default HaveFun;
