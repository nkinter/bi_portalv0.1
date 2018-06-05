import React from 'react';
/* This somehow makes icons work with Materialize-css */

const Landing = () => {
    return (
        <div className="section">
            <div className={"row"}>
                <h5 className={"col s12 center-align blue-grey-text text-darken-4"}>Please use your LDAP Credentials to Log In</h5>
            </div>
            <form action={"/api/auth/ldap"} method={"post"}>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <label className={"blue-grey-text text-darken-4"}>Username</label>
                        <input id="username"
                               name="username"
                               label="Username"
                               type="text"
                               className="validate"
                               autoComplete="off" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <label className={"blue-grey-text text-darken-4"}>Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               label="Password"
                               className="validate"
                               autoComplete="off"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <p className="center-align">
                        <button className="btn blue-grey darken-4 waves-effect waves-light" type="submit" name="action">Login
                            <i className="material-icons right">send</i>
                        </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Landing;