import React, { Component } from 'react';
import Table from './Print';
// import ReactToPrint from 'react-to-print';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName:"KGN Colony",
      name:"",
      amount:"",
      date:"",
      receiptId:"1"
    };

    this._handleName = this._handleName.bind(this);
    this._handleAmount = this._handleAmount.bind(this);
    

  }
  _handleName(e) {
    this.setState({name: e.target.value});
    console.log(this.state.name);
  }
  _handleAmount(e) {
    this.setState({amount: e.target.value});
  }
  // function Date() {

  // }
  // function ReceiptId(){
  //   return Math.random();
  // }
  componentWillMount() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth()+1;
    const yy = date.getFullYear();

    const today = dd + '/' + mm + '/' + yy;
    this.setState({date: today});
  }
  render() {
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
        {this.state.date}
        {/* <Table name={this.state.name} receiptId={this.state.receiptId} amount={this.state.amount} date = {this.state.date} /> */}
        <button>PRINT</button>
      </div>
    );
  }
}


// class Table extends Component {
//     render() {
//       return (
//         <table>
//           <thead>
//             <th>Receipt ID</th>
//             <th>Name</th>
//             <th>Amount</th>
//             <th>Date</th>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{this.props.receiptID}</td>
//               <td>{this.props.name}</td>
//               <td>{this.props.amount}</td>
//               <td>{this.props.date}</td>
//             </tr>          
//           </tbody>
//         </table>
//         // <h1>knasslkdsn</h1>
//       );
//     }
//   }
   
//   class Print extends React.Component {
//     render() {
//       return (
//         <div>
//           <ReactToPrint
//             trigger={() => <a href="#">Print this out!</a>}
//             content={() => this.componentRef}
//           />
//           <Table ref={el => (this.componentRef = el)} />
//         </div>
//       );
//     }
//   }
  

export default App;
