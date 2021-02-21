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
                <div className="container py-5 shadow-lg p-3 mt-5 px-5 bg-light rounded  bg-info">

                    {Users.map(user => (

                        <div key={user._id} className="row customers">
                            <div className="col-sm-3 user-value">{user.name}</div>
                            <div className="col-sm-4 user-value">{user.email}</div>
                            <div className="col-sm-3 user-value">{user.phone}</div>
                            <div className="col-sm-2 user-value">{user.balance}</div>
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

export default Customer;