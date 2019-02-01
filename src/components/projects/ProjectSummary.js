import React, { Component } from 'react';
import moment from 'moment';

class ProjectSummary extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title project-title">{project.title}</span>
                    <p>Posted by { project.authorFirstName + " " + project.authorLastName }</p>
                    <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
                </div>
            </div>
        );
    }
}

export default ProjectSummary;