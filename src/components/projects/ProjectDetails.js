import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectDetails extends Component {
    render() {
        const { project } = this.props;
        if(project) {
            return (
                <div className="container section project-details">
                <Link to="/" className="btn  blue lighten-1" >&#8592;</Link>
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">
                                <b>{project.title}</b>
                            </span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>3rd of December</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container center">
                    <p>Loading Project</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);