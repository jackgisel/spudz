import React, { Component } from 'react';

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
        console.log(this.state);
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
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;