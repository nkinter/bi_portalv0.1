import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
                /*return (
                    <form className="col s12" action={"/api/auth/ldap"} method={"post"}>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="username"
                                       name="username"
                                       type="text"
                                       className="validate"
                                       placeholder="Username"
                                       autoComplete="off" />
                            </div>
                            <div className="input-field col s4">
                                <input type="password"
                                       id="password"
                                       name="password"
                                       className="validate"
                                       placeholder="Password"
                                       autoComplete="off"/>
                            </div>
                            <div className="input-field col s4">
                                <button className="btn blue-grey darken-4 waves-effect waves-light" type="submit" name="action">Login
                                </button>
                            </div>
                        </div>
                    </form>
                );*/
            default:
                return (
                    <li>
                        <a href={'/api/auth/logout'}>Logout<i className="large material-icons right">exit_to_app</i></a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div cellPadding="2px" className={"nav-wrapper col s12 teal lighten-2"}>
                            <a href="/" className={"extraPadding1 brand-logo grey-text text-lighten-5"}>
                                BI Portal <i className="large material-icons right">list_alt</i>
                            </a>
                    <ul className="right">{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);