import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar';

class Customer extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3001/user');
        console.log(response.data);
        this.setState({ users: response.data })
    }


    render() {
        let Users = this.state.users;
        return (
            <>
                <Navbar />
                <div className="container">
                    {/* <div className="col-sm-3 text-center">
                        <p>+</p>
                        <p>Add New</p>
                    </div> */}

                    {Users.map(user => (

                        <div key={user._id} className="row customers">
                            <div className="col-sm-3 user-value">{user.name}</div>
                            <div className="col-sm-4 user-value">{user.email}</div>
                            <div className="col-sm-3 user-value">{user.phone}</div>
                            <div className="col-sm-2 user-value">{user.balance}</div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Customer;