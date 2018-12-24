import React, { Component } from 'react';

class ProjectSummary extends Component {
    render() {
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title project-title">Road Trip</span>
                    <p>Posted by Jack Gisel</p>
                    <p className="grey-text">3rd December 2am</p>
                </div>
            </div>
        );
    }
}

export default ProjectSummary;