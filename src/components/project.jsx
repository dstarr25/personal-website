import React, { useRef } from 'react';
import ViewDiv from './viewDiv';
import { animVariants } from '../projectInfo';

const gray = 'hsl(0deg, 0%, 95%)';
const white = 'hsl(0deg, 0%, 95%)';

const Project = ({ project, index, p2ref }) => {
    const pRef = useRef(null);

    return (
        <div ref={p2ref} className="project">
            <ViewDiv className="titles" variants={animVariants.fadeAndSlideInFromTop}>
                <div className="title">{project.title}</div>
                <div className="rightInfo">
                    <div className="timeFrame">{project.timeFrame}</div>
                    <div className="subtitle">{project.subtitle}</div>
                </div>
            </ViewDiv>
            <div className="projectInfo" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <ViewDiv variants={animVariants.fadeAndSlideInFromRight}><img src={project.image} alt="" /></ViewDiv>
                <ViewDiv variants={animVariants.fadeAndSlideInFromLeft} className="text">
                    <div>{project.description}</div>
                    <div><span>Technologies used:</span>{`\u00A0${project.technologies}`}</div>
                </ViewDiv>
            </div>
            <ViewDiv variants={animVariants.fadeAndSlideInFromBottom} className="links">
                {project.links.map((link) => (
                    <a className="link" href={link.link}><span>{link.text}</span></a>
                ))}
            </ViewDiv>
        </div>
    );
};

export default Project;
