import React, { Component } from 'react';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.id] : e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign up</h5>
                    {this.props.authError ? <p className="red lighten-4">{this.props.authError}</p> : null}

                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                    <div className="input-field">
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" onChange={this.onChange} />
                    </div>
                    <div className="input-field"></div>
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);