import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="container-fluid px-0 navbar-style">
            <div class="row">
                <div class="col-md-12 col-12 mx-auto">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">My Bank</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <NavLink className="nav-link p-2 pr-3" to="/" exact={true}>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/Customers" exact={true}>Customers</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/Transaction" exact={true}>Transactions</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/Transfer" exact={true}>New Transaction</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>);
}

export default Navbar; <div class="container-fluid mt-2 navbar-style py-3">
    <div class="row">
        <div class="col-md-12 col-12 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user">Customers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Transactions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">New Transaction</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>