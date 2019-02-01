import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signup" />;
        return (
            <Route {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);