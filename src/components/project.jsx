import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ViewDiv from './viewDiv';
import animVariants from '../animInfo';

const gray = 'hsl(0deg, 0%, 95%)';
const white = 'hsl(0deg, 0%, 95%)';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

const Project = ({ project, index, p2ref }) => {
    const titleRef = useRef(null);
    const controls = useAnimation();
    const titleInView = useInView(titleRef, { once: true });
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (titleInView) controls.start('show');
        else controls.start('hide');
    }, [titleInView]);

    return (
        <div ref={p2ref} className="project">
            <ViewDiv controls={controls} className="titles" variants={animVariants.fadeAndSlideInFromTop}>
                <div ref={titleRef} className="title">{project.title}</div>
                <div className="rightInfo">
                    <div className="timeFrame">{project.timeFrame}</div>
                    <div className="subtitle">{project.subtitle}</div>
                </div>
            </ViewDiv>
            <div className="projectInfo" style={width > 900 ? { flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' } : { flexDirection: 'column' }}>
                <ViewDiv controls={controls} variants={animVariants.fadeAndSlideInFromRight}><img src={project.image} alt="" /></ViewDiv>
                <ViewDiv controls={controls} variants={animVariants.fadeAndSlideInFromLeft} className="text">
                    <div>{project.description}</div>
                    <div><span>Technologies used:</span>{`\u00A0${project.technologies}`}</div>
                </ViewDiv>
            </div>
            <ViewDiv controls={controls} variants={animVariants.fadeAndSlideInFromBottom} className="links">
                {project.links.map((link) => (
                    <a className="link" href={link.link}><span>{link.text}</span></a>
                ))}
            </ViewDiv>
        </div>
    );
};

export default Project;
