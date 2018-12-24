import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/create-project">New Project</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">JG</NavLink></li>
            </ul>
        );
    }
}

export default SignedInLinks;