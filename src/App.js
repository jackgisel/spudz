import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicOnlyRoute from './components/auth/PublicOnlyRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/project/:id" component={ProjectDetails} />
            <PublicOnlyRoute path="/signin" component={SignIn} />
            <PublicOnlyRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/create-project" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
