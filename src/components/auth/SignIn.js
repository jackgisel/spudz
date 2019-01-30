import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.id] : e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    {this.props.authError ? <p>{this.props.authError}</p> : null}
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
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
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);