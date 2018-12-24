import React, { Component } from 'react';

class ProjectDetails extends Component {
    render() {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            Project Title
                            - {this.props.match.params.id}
                        </span>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Jack Gisel</div>
                        <div>3rd of December</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDetails;