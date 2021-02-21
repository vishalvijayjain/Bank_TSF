import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';

class Transaction extends Component {
    state = {
        transactions: []
    }
    async componentDidMount() {
        let response = await axios.get('http://localhost:3001/transfer');
        console.log(response.data);
        this.setState({ transactions: response.data })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    {/* <div className="col-sm-3 text-center">
                        <p>+</p>
                        <p>Add New</p>
                    </div> */}

                    {this.state.transactions.map(transaction => (

                        <div key={transaction._id} className="row customers">
                            <div className="col-sm-3 user-value">{transaction.sender}</div>
                            <div className="col-sm-4 user-value">{transaction.reciever}</div>
                            <div className="col-sm-3 user-value">{transaction.amount}</div>
                            <div className="col-sm-2 user-value">{transaction.date}</div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Transaction;