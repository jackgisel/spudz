import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="project-list section">
                {projects && projects.map((project) => {
                    return (
                        <Link key={project.id} to={'/project/' + project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ProjectList;