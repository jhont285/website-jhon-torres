import React from 'react';
import FontAwesome from 'react-fontawesome';

import Game from './Game';

const HaveFun = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Description />
        </div>
        <div className="col-md-6">
          <Game />
        </div>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="jumbotron" id="headerHaveFun">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="text-center">Have fun</h1>
          <p className="text-center lead">with game &quot;Code puzzle&quot;</p>
        </div>
      </div>
    </div>
  </header>
);

const Description = () => (
  <section>
    <h1>Intructions <FontAwesome name="list-ol" /></h1>
    <ul>
      <li>
        You have to choose a number from 1 to 10 and Go, that is the number
        of digits of your number that you want to guess.
      </li>
      <li>After, You must write your number and then click on the buttom &quot;Submit&quot;</li>
      <li>
        In the bottom, Your number will appear in the left and for each
        number will appear with the next meaning
      </li>
      <ul>
        <li><FontAwesome name="arrow-up" /> The digit is bigger</li>
        <li><FontAwesome name="arrow-down" /> The digit is smaller</li>
        <li><FontAwesome name="check" /> This is a digit</li>
      </ul>
      <li>The numbers will not have leading zeros.</li>
      <li>You have only a number of attempts shown above.</li>
    </ul>
  </section>
);

export default HaveFun;
