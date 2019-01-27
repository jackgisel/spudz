import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.id] : e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title:</label>
                        <input type="text" id="title" onChange={this.onChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content:</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.onChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create project</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);