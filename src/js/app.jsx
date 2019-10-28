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
      <form className='for-horizontal'>
        <div className='container'>
          <h1>Mortgage Calculator</h1>
          <div>
            <label>Loan Balance</label>
            <input className='balance' type='number' placeholder='0'></input>
          </div>
          <div>
            <label>Intrest Rate(%)</label>
          <input className='rate' type='number' step='0.01' placeholder='0'></input>
          </div>
          <div>
            <label>Loan Term (years)</label>
            <select className='term'>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          </div>
   
          <button className='submit'>Submit</button>
          <div id='output' className='output'></div>
        </div>
      </form>
    );
  }
}