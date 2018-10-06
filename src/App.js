import React, { Component } from 'react';
import Table from './Print';
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
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }
  _handleAmount(e) {
    this.setState({ amount: e.target.value });
  }
  // function Date() {

  // }
  // function ReceiptId(){
  //   return Math.random();
  // }
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
        <h1>{this.state.appName}</h1>
       
        <label>
          Name:
          <input type="text" placeholder="ENter the name" value={this.state.name} onChange={this._handleName}></input>
        </label>
        <label>
          Amount:
          <input type="number" placeholder="ENter the amount" value={this.state.amount} onChange={this._handleAmount}></input>
        </label>
        {/* { Math.random()} */}
        {/* { new Date();} */}
        {/* <ReceiptId /> */}
        
        <button onClick={e => { this.setState({submit:!this.state.submit}) }}>SUBMIT</button>
        
        {this.state.submit ? <Table name={this.state.name} receiptId={this.state.receiptId} amount={this.state.amount} date={this.state.date} /> : ''}
      </div>
    );
  }
}

export default App;
