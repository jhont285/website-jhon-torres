import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import swal from 'sweetalert';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      numberDigits: 1,
      maxDigits: 10,
      gameBegin: false,
      attempts: null,
      currentAttempts: null,
      possibleAnswer: '',
      secretNumber: null,
      titleHint: [],
      hint: [],
    };
    this.changeNumber = this.changeNumber.bind(this);
    this.validateMove = this.validateMove.bind(this);
    this.getNumber = this.getNumber.bind(this);
    this.getPossible = this.getPossible.bind(this);
  }

  getNumber(event) {
    const auxSecretNumber = [];
    if (this.state.numberDigits === 1) {
      auxSecretNumber.push(parseInt(Math.random() * 10, 10).toString());
    } else {
      auxSecretNumber.push(parseInt((Math.random() * 9) + 1, 10).toString());
    }
    for (let i = 1; i < this.state.numberDigits; i += 1) {
      auxSecretNumber.push(parseInt(Math.random() * 10, 10).toString());
    }

    this.setState({
      gameBegin: !this.state.gameBegin,
      attempts: this.state.numberDigits * 4,
      currentAttempts: 0,
      secretNumber: auxSecretNumber,
    });
    event.preventDefault();
  }


  getPossible(event) {
    const value = event.target.value.toString();
    if (value.length === 0) {
      this.setState({ possibleAnswer: '' });
    } else {
      const lastElement = parseInt(value[value.length - 1], 10);
      if (value.length <= this.state.numberDigits && Number.isInteger(lastElement)) {
        this.setState({ possibleAnswer: value });
      }
    }
  }

  changeNumber(event) {
    this.setState({ numberDigits: event.target.value });
  }

  validateMove(event) {
    if (this.state.possibleAnswer.length !== this.state.secretNumber.length) {
      swal('Oh no', 'Please, write a number correct', 'error');
    } else {
      this.setState({ currentAttempts: this.state.currentAttempts + 1 }, () => {
        const win = this.state.possibleAnswer === this.state.secretNumber.join('');
        const lost = this.state.currentAttempts === this.state.attempts;
        if (win) {
          swal('You win!', `The secret number is ${this.state.secretNumber.join('')}`, 'success');
        } else if (lost) {
          swal('You lost!', `The secret number is ${this.state.secretNumber.join('')}`, 'error');
        }
        if (win || lost) {
          this.setState({
            gameBegin: !this.state.gameBegin,
            possibleAnswer: '',
            numberDigits: 1,
          });
        }

        const auxHint = this.state.secretNumber.map((item, index) => {
          if (item === this.state.possibleAnswer[index]) {
            return 'check';
          } else if (item > this.state.possibleAnswer[index]) {
            return 'arrow-up';
          }
          return 'arrow-down';
        });
        this.setState({ hint: auxHint, titleHint: this.state.possibleAnswer.split('') });
      });
    }
    event.preventDefault();
  }

  render() {
    const title = !this.state.gameBegin
      ? 'Please select number length'
      : `You have ${this.state.attempts - this.state.currentAttempts} attempts`;

    return (
      <section>
        <h1>Code puzzle <FontAwesome name="gamepad" /> </h1>
        <h3 className="text-center">{title}</h3>

        { !this.state.gameBegin ?
          <section className="text-center">
            <form className="form-inline" onSubmit={this.getNumber}>
              <select className="form-control" onChange={this.changeNumber}>
                {Array.from(
                  new Array(this.state.maxDigits),
                  (x, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)
                }
              </select>
              <input className="btn btn-default" type="submit" value="Go" />
            </form>
          </section>
          :
          <section>
            <div className="text-center">
              <form className="form-inline" onSubmit={this.validateMove} >
                <input
                  type="text"
                  className="form-control"
                  onChange={this.getPossible}
                  value={this.state.possibleAnswer}
                />
                <input className="btn btn-default" type="submit" value="Submit" />
              </form>
            </div>

            {this.state.currentAttempts > 0 &&
              <div>
                <h2 className="text-center">Hint</h2>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        {this.state.titleHint.map(item =>
                          <th className="text-center" key={item.id}>{item}</th>,
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {this.state.hint.map(item =>
                          (<td className="text-center">
                            <FontAwesome key={item.id} name={item} />
                          </td>),
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            }
          </section>
        }
      </section>
    );
  }
}

export default Game;
