import React from "react";
import { Route } from "react-router";
import Alert from './Components/alert';
import Landing from './Components/landing';
import Customers from './Components/customers';
import Transfer from './Components/transfer';
import Transaction from './Components/transaction';

const Main = () => {
    return (
        <>
            <Alert />
            {/* <Route path="/Landing" component={Landing} /> */}
            <Route path="/" exact component={Landing} />
            <Route path="/Customers" component={Customers} />
            <Route path="/Transfer" component={Transfer} />
            <Route path="/Transaction" component={Transaction} />
        </>
    );
}

export default Main;
