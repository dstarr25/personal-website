import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { TbBrandCSharp, TbBrandCpp, TbBrandCss3, TbBrandFirebase, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandPython, TbBrandReact, TbBrandReactNative, TbBrandRedux, TbBrandUnity } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import Icon from './icon';
import ViewDiv from './viewDiv';
import { animVariants } from '../projectInfo';

const icons = [
    'redux',
    'html',
    'css',
    'react & react native',
    'unity',
    'c#',
    'python',
    'c++',
    'javascript',
    'firebase',
    'mongodb',
    'git',
    'java',
];

function About() {
    const skillSize = '150px';
    const iconColor = '#F07F75';
    const [hoveredIcon, setHoveredIcon] = useState('');
    const [iconNum, setIconNum] = useState(0);
    const controls = useAnimation();
    const viewRef = useRef(null);
    const inView = useInView(viewRef, { once: true });

    const handleHover = (iconName) => {
        setHoveredIcon(iconName);
        setIconNum((p) => p + 1);
    };

    useEffect(() => {
        if (inView) controls.start('show');
        else controls.start('hide');
    }, [inView]);

    return (
        <motion.div
            className="aboutPage"
            initial={{ top: '100vh' }}
            animate={{ top: '0vh' }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}

        >
            <div className="smallerThanFull">
                <div className="top">
                    <div className="infoText">
                        <div ref={viewRef} className="title">about me</div>
                        <div className="text">Software Engineer with experience in Unity/VR and Full-Stack Web Development</div>
                        <div className="description">
                            I am currently a rising Junior at Dartmouth College, pursuing a major in Computer Science and a minor in Digital Arts. I am pursuing a career in software engineering and am currently searching for full-time internships.
                        </div>
                    </div>

                    <ViewDiv controls={controls} variants={animVariants.eggSpin} className="portrait">
                        <img src="https://media.licdn.com/dms/image/C4E03AQEBXk0s7NKWdw/profile-displayphoto-shrink_800_800/0/1638081523111?e=2147483647&v=beta&t=kyK5APHA6B4HkQd2xFUI2e9NZf6OASmG11GJIyExI58" alt="me" />
                    </ViewDiv>
                </div>

                <div className="skills">
                    <div className="title">
                        i am skilled in
                        <AnimatePresence>
                            <motion.span
                                className="tooltip"
                                key={iconNum}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            > {`\u00A0${hoveredIcon}`}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <div className="skillIcons">
                        <Icon icon={<TbBrandRedux />} handleHover={handleHover} name="redux" size={skillSize} hoverColor="#764abc" initialColor={iconColor} />
                        <Icon icon={<TbBrandHtml5 />} handleHover={handleHover} name="html" size={skillSize} hoverColor="#DD4B24" initialColor={iconColor} />
                        <Icon icon={<TbBrandCss3 />} handleHover={handleHover} name="css" size={skillSize} hoverColor="#0068BA" initialColor={iconColor} />
                        <Icon icon={<TbBrandReactNative />} handleHover={handleHover} name="react & react native" size={skillSize} hoverColor="#5ED3F3" initialColor={iconColor} />
                        <Icon icon={<TbBrandUnity />} handleHover={handleHover} name="unity" size={skillSize} hoverColor="#000000" initialColor={iconColor} />
                        <Icon icon={<TbBrandCSharp />} handleHover={handleHover} name="c#" size={skillSize} hoverColor="#764abc" initialColor={iconColor} />
                        <Icon icon={<TbBrandPython />} handleHover={handleHover} name="python" size={skillSize} hoverColor="#F7CC40" initialColor={iconColor} />
                        <Icon icon={<TbBrandCpp />} handleHover={handleHover} name="c++" size={skillSize} hoverColor="#0076F7" initialColor={iconColor} />
                        <Icon icon={<TbBrandJavascript />} handleHover={handleHover} name="javascript" size={skillSize} hoverColor="#E8D44D" initialColor={iconColor} />
                        <Icon icon={<TbBrandFirebase />} handleHover={handleHover} name="firebase" size={skillSize} hoverColor="#F79B01" initialColor={iconColor} />
                        <Icon icon={<TbBrandMongodb />} handleHover={handleHover} name="mongodb" size={skillSize} hoverColor="#00E15F" initialColor={iconColor} />
                        <Icon icon={<TbBrandGit />} handleHover={handleHover} name="git" size={skillSize} hoverColor="#E84D31" initialColor={iconColor} />
                        <Icon icon={<FaJava />} handleHover={handleHover} name="java" size={skillSize} hoverColor="#F0931C" initialColor={iconColor} />
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default About;
