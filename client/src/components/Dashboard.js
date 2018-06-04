import React, { Component } from 'react';
import ReportsList from './reports/FilteredList';
/* This somehow makes icons work with Materialize-css */
import { colorPallet } from 'material-icons-react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ReportsList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth, favorites: state.favorites };
}

export default connect(mapStateToProps)(Dashboard);