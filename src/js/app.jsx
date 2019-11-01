/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
    };
    this.changeInput = this.changeInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  changeInput(object) {
    this.setState({ [object.target.name]: [object.target.value] });
  }

  calculate() {
    let rate = (this.state.rate) / 100 / 12;
    let term = (this.state.term) * 12;
    let balance = (this.state.balance);
    let monthlyPayment = (balance * (rate * Math.pow((1 + rate), term) / (Math.pow(1 + rate, term) - 1))).toFixed(2);
    this.setState({ submit: monthlyPayment });
  }

  render() {
    return (
      <div className='container'>
        <div name='input' id='input'>
          <h3>Mortgage Calculator</h3>
          <input name='balance' type='number' value={this.state.balance} onChange={this.changeInput} />
          <input name='rate' type='number' step='0.01' value={this.state.rate} onChange={this.changeInput} />
          <select name='term' value={this.state.term} onChange={this.changeInput}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <button name='submit' onClick={this.calculate}>submit</button>
        </div>
        <div id='output' name='output'> ${this.state.submit} is your payment. </div>
      </div>
    );
  }
}
