import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

class SignedInLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/create-project">New Project</NavLink></li>
                <li><a href="#" onClick={this.props.signOut} >Logout</a></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">JG</NavLink></li>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);