import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';

class Transaction extends Component {
    state = {
        transactions: []
    }
    async componentDidMount() {
        let response = await axios.get('https://backendbanktsf.herokuapp.com/transfer');
        console.log(response.data);
        this.setState({ transactions: response.data })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="container py-5 shadow-lg p-3 mt-5 px-5 bg-light rounded">

                    {this.state.transactions.map(transaction => (

                        <div key={transaction._id} className="row customers">
                            <div className="col-sm-3 user-value">{transaction.sender}</div>
                            <div className="col-sm-4 user-value">{transaction.reciever}</div>
                            <div className="col-sm-3 user-value">{transaction.amount}</div>
                            <div className="col-sm-2 user-value">{transaction.date}</div>
                        </div>
                    ))}
                </div>
                <>
                        <br/>
                        <hr/>
                        <p className="text-center text-info">Created by Vishal Jain as a TSF task. Check out my <a href="https://github.com/vishalvijayjain/Doodles" target="_blank">Github</a></p>
                    </>
            </>
        );
    }
}

export default Transaction;