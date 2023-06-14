import React from 'react';

const gray = 'hsl(0deg, 0%, 80%)';
const white = 'hsl(0deg, 0%, 95%)';

const Project = ({ project, index }) => {
    return (
        <div className="project" style={{ backgroundColor: index % 2 === 0 ? white : gray }}>
            <div className="titles">
                <div className="title">{project.title}</div>
                <div className="rightInfo">
                    <div className="timeFrame">{project.timeFrame}</div>
                    <div className="subtitle">{project.subtitle}</div>
                </div>
            </div>
            {/* <div>

            </div> */}

        </div>
    );
};

export default Project;
