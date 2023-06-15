import React from 'react';

const gray = 'hsl(0deg, 0%, 95%)';
const white = 'hsl(0deg, 0%, 95%)';

const Project = ({ project, index, p2ref }) => {
    return (
        <div ref={p2ref} className="project" style={{ backgroundColor: index % 2 === 0 ? white : gray }}>
            <div className="titles">
                <div className="title">{project.title}</div>
                <div className="rightInfo">
                    <div className="timeFrame">{project.timeFrame}</div>
                    <div className="subtitle">{project.subtitle}</div>
                </div>
            </div>
            <div className="projectInfo">
                <img src={project.image} alt="" />
                <div className="text">
                    <div>{project.description}</div>
                    <div><span>Technologies used:</span>{`\u00A0${project.technologies}`}</div>
                </div>
            </div>

        </div>
    );
};

export default Project;
