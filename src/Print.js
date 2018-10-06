import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ReactTable from 'react-table';
import "react-table/react-table.css";


class Table extends Component {
    constructor(props){
             super(props);
        console.log(this.props)
    }
    
    setData() {
         var  data = [
            {
          name: this.props.name,
          amount: this.props.amount,
          date:  777
            }
        ]

        return data;
    }
    setColumns(){
        const columns = [{
            Header: 'Name',
            accessor: 'name'
          }, {
            Header: 'Amount',
            accessor: 'amount',
          //   Cell: props => <span className='number'>{props.value}</span>
          },{
              Header: 'Date',
              accessor: 'date',
              // Cell: props => <span className='number'>{props.value}</span> 
            }
          ]
          return columns;
    }
        
        render() {
            
        return( 
        <ReactTable
            data={this.setData()}
            columns={this.setColumns()}
        />
        );
        
    //   return (
    //     <table>
    //       <thead>
    //         <th>Receipt ID</th>
    //         <th>Name</th>
    //         <th>Amount</th>
    //         <th>Date</th>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>{this.props.receiptID}</td>
    //           <td>{this.props.name}</td>
    //           <td>{this.props.amount}</td>
    //           <td>{this.props.date}</td>
    //         </tr>          
    //       </tbody>
    //     </table>
    //   );
    }
  }
   
  export default class Print extends React.Component {
    render() {        
        return (
            <div>           
            <Table {...this.props} ref={el => (this.componentRef = el)} />
            <ReactToPrint
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.componentRef}
            />
            </div>
        );
    }
}
  

