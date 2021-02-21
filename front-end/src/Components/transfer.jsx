import React, { Component } from 'react';
import axios from 'axios';
import alertService from '../Services/alertService';
import Navbar from './navbar';


class Transfer extends Component {
    state = {
        users: [],
        senderId: 0,
        recieverId: 0,
        amount: 0
    }
    async componentDidMount() {
        let response = await axios.get('http://localhost:3001/user');
        console.log(response.data);
        this.setState({ users: response.data })
    }
    handleSender = (e) => {
        let value = e.target.value;
        this.setState({ senderId: value });

    }
    handleReciever = (e) => {
        let value = e.target.value;
        this.setState({ recieverId: value });

    }
    handleAmount = (e) => {
        let amount = e.target.value;
        this.setState({ amount: amount });
    }
    amount
    transfer = (e) => {
        e.preventDefault();
        if (this.state.senderId == this.state.recieverId) {
            alertService.error("Sender and Reciever can't be same");
        }
        else {
            let data = {
                senderId: this.state.senderId,
                recieverId: this.state.recieverId,
                amount: this.state.amount,
            }
            axios.post(`http://localhost:3001/transfer/new`, data)
                .then((res) => { console.log(res.data); alertService.success(res.data); })
                .catch((err) => { console.log(err); alertService.error("Insufficent Balance"); })
        }
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="container justify-content-center mt-5 shadow p-3 mb-5 bg-light rounded">
                    <form className="col-sm-12 mt-5 pt-5" onSubmit={this.transfer}>
                        <div className="container">
                            <h2 className="text-center text-muted pb-5">Transfer Fund Window</h2>
                        <div className="form-group col-sm-12"><label htmlFor="sender">Transfer from</label>
                            <select className="form-control  mb-4" name="sender" required value={this.state.senderId} onChange={e => this.handleSender(e)}
                            >
                                <option value="" id="" defaultValue >Please select</option>
                                {this.state.users.map(user => (<option key={user._id} value={user._id}>{user.name}</option>))}
                            </select>
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="reciever">Transfer to</label>
                            <select className="form-control mb-4" name="reciever" required value={this.state.recieverId} onChange={e => this.handleReciever(e)}
                            >
                                <option value="" id="" defaultValue >Please select</option>
                                {this.state.users.map(user => (<option key={user._id} value={user._id}>{user.name}</option>))}
                            </select>
                        </div>
                        <div className="form-group col-sm-3 mb-4">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" name="amount" className="form-control" id="amount" aria-describedby="amount" onChange={this.handleAmount} />

                        </div>
                        <div className="col-sm-12 d-flex justify-content-center reply-button">
                            <button type="submit" className="btn btn-success mb-3">Transfer</button>
                        </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Transfer;
