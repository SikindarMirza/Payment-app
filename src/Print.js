import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Table extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    setData() {
        var data = [
            {
                name: this.props.name,
                amount: this.props.amount,
                date: this.props.date
            }
        ]

        return data;
    }
    setColumns() {
        const columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Amount',
            accessor: 'amount',
        }, {
            Header: 'Date',
            accessor: 'date',
        }
        ]
        return columns;
    }

    render() {
        return (
            <ReactTable className="table"
                data={this.setData()}
                columns={this.setColumns()}
                showPagination={false}
                showPaginationTop={false}
                showPaginationBottom={false}
            />
        );
    }
}

export default class Print extends React.Component {
    render() {
        return (
            <div>
                <div ref={el => (this.componentRef = el)} className="receipt">
                    <h2>KGN colony</h2>
                    <h2 className="receipt">Receipt Id: {Math.random().toString(36).substr(2, 9)}</h2>
                    <Table {...this.props} />
                </div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
            </div>
        );
    }
}


