import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Laporan from "../../laporan";
import Form from "../../form";
import InfoAccount from '../../infoaccount';
import Login from '../../login';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/laporan">
                            <Laporan />
                        </Route>
                        <Route path="/form">
                            <Form></Form>
                        </Route>
                        <Route path="/info">
                            <InfoAccount></InfoAccount>
                        </Route>
                        <Route path="/">
                            <Login></Login>
                        </Route>
                    </Switch>

                </div>
            </div>);
    }
}

export default Body;