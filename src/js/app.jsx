import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      rate: "",
      term: "",
      output: "",
    };
    this.changeInput = this.changeInput.bind(this);
    this.calcualte = this.calcualte.bind(this);
  }

  calcualte() {
    const p = Numbers(this.state.balance);
    const r = Numbers(this.state.rate) / 100 / 12;
    const n = Numbers(this.state.terms) * 12;
    const monthlyPayment = (p * (r * math.pow((1 + r), n) / (Math.pow(1 + r, n) - 1))).toFixed(2);
    this.setState({ submit: monthlyPayment })
  }

  render() {
    return (
      <form class='for-horizontal'>
        <div className='container'>
          <html className='src/js/app.jsx'>
            <title>Mortgage Calculator</title>
          </html>
          <body>
            <h1>Mortgage Calculator</h1>
            <label for="balance">Loan Balance </label>
            <input name='balance' type='number' placeholder='0'></input>
            <label for="rate">Interest Rate (%) </label>
            <input name='rate' type='number' step='0.01' placeholder='0'></input>
            <input for='term'>Loan Term (Years) </input>
            <select name='term'>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
            <button name='submit'>Submit</button>
            <div id='output' name='output'></div>
          </body>
        </div>
      </form>
    );
  }
}