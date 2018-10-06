import React, { Component } from 'react';
import Table from './Print';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "KGN Colony",
      name: "",
      amount: "",
      date: "",
      receiptId: "1",
      submit: false
    };

    this._handleName = this._handleName.bind(this);
    this._handleAmount = this._handleAmount.bind(this);


  }
  _handleName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value, submit: false });
  }
  _handleAmount(e) {
    e.preventDefault();
    this.setState({ amount: e.target.value, submit: false });
  }

  componentWillMount() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear();

    const today = dd + '/' + mm + '/' + yy;
    this.setState({ date: today });
  }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <Header />
        <div className="values">
          <label>
            Name:
            <input type="text" placeholder="ENter the name" value={this.state.name} onChange={this._handleName}></input>
          </label>
          <label>
            Amount:
            <input type="number" placeholder="ENter the amount" value={this.state.amount} onChange={this._handleAmount}></input>
          </label>
          <button onClick={e => { this.setState({ submit: !this.state.submit }) }}>SUBMIT</button>
        </div>
        {this.state.submit ? <Table name={this.state.name} receiptId={this.state.receiptId} amount={this.state.amount} date={this.state.date} /> : ''}
      </div>
    );
  }
}

export default App;
