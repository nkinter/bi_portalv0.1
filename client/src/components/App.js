import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchFavorites();
    }

    render() {
        return (
            <div className={"container teal lighten-5"}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact={true} path={"/"} component={Landing}/>
                        <Route exact={true} path={"/dashboard"} component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);