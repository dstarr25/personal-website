import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbBrandCSharp, TbBrandCpp, TbBrandCss3, TbBrandFirebase, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandPython, TbBrandReact, TbBrandReactNative, TbBrandRedux, TbBrandUnity } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import Icon from './icon';

function About() {
    const skillSize = '150px';
    const [hoveredIcon, setHoveredIcon] = useState('');
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
                        <div className="title">about me</div>
                        <div className="text">Software Engineer with experience in Unity/VR and Full-Stack Web Development</div>
                        <div className="description">
                            I am currently a rising Junior at Dartmouth College, pursuing a major in Computer Science and a minor in Digital Arts. I am pursuing a career in software engineering and am currently searching for full-time internships.
                        </div>
                    </div>

                    <div className="portrait">
                        <img src="https://media.licdn.com/dms/image/C4E03AQEBXk0s7NKWdw/profile-displayphoto-shrink_800_800/0/1638081523111?e=2147483647&v=beta&t=kyK5APHA6B4HkQd2xFUI2e9NZf6OASmG11GJIyExI58" alt="me" />
                    </div>
                </div>

                <div className="skills">
                    <div className="title">i am skilled in
                        <motion.span
                            initial={{ opacity: 0 }} // Initial style of the div
                            animate={{ opacity: 1 }} // Animation style to transition to
                            transition={{ duration: 0.5 }}
                        >{`\u00A0${hoveredIcon}`}
                        </motion.span>
                    </div>
                    <div className="skillIcons">
                        <Icon icon={<TbBrandRedux />} setHoveredIcon={setHoveredIcon} name="redux" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandReact />} setHoveredIcon={setHoveredIcon} name="react" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandHtml5 />} setHoveredIcon={setHoveredIcon} name="html" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandCss3 />} setHoveredIcon={setHoveredIcon} name="css" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandReactNative />} setHoveredIcon={setHoveredIcon} name="react native" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandUnity />} setHoveredIcon={setHoveredIcon} name="unity" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandCSharp />} setHoveredIcon={setHoveredIcon} name="c#" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandPython />} setHoveredIcon={setHoveredIcon} name="python" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandCpp />} setHoveredIcon={setHoveredIcon} name="c++" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandJavascript />} setHoveredIcon={setHoveredIcon} name="javascript" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandFirebase />} setHoveredIcon={setHoveredIcon} name="firebase" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandMongodb />} setHoveredIcon={setHoveredIcon} name="mongodb" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<TbBrandGit />} setHoveredIcon={setHoveredIcon} name="git" size={skillSize} hoverColor="#764abc" />
                        <Icon icon={<FaJava />} setHoveredIcon={setHoveredIcon} name="java" size={skillSize} hoverColor="#764abc" />
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default About;
