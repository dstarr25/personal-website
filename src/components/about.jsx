import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { TbBrandRust, TbBrandGraphql, TbBrandCSharp, TbBrandCpp, TbBrandCss3, TbBrandFirebase, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandMysql, TbBrandPython, TbBrandReact, TbBrandReactNative, TbBrandRedux, TbBrandTailwind, TbBrandTypescript, TbBrandUnity, TbBrandVue } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import Icon from './icon';
import ViewDiv from './viewDiv';
import animVariants from '../animInfo';

const aboutMePic = '/img/aboutMePic.jpg';

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

function About() {
    const iconColor = '#F07F75';
    const [hoveredIcon, setHoveredIcon] = useState('');
    const [iconNum, setIconNum] = useState(0);
    const controls = useAnimation();
    const viewRef = useRef(null);
    const inView = useInView(viewRef, { once: true });
    const [imgLoaded, setImgLoaded] = useState(false);
    const { height, width } = useWindowDimensions();

    const handleHover = (iconName) => {
        setHoveredIcon(iconName);
        setIconNum((p) => p + 1);
    };

    useEffect(() => {
        if (imgLoaded && inView) {
            console.log('showing');
            controls.start('show');
        } else {
            console.log('hiding');
            controls.start('hide');
        }
    }, [inView, imgLoaded]);

    const skillSize = width > 900 ? 100 : 80;

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
                        <div className="text">Software Engineer with experience in Unity/VR, mobile app, and full-stack web development</div>
                        <div className="description">
                            I am currently a rising Senior at Dartmouth College, studying Computer Science and a minor in Digital Arts. I am pursuing a career in software engineering and am currently searching for full-time positions.
                        </div>
                    </div>

                    <motion.div animate={controls} initial="hide" variants={animVariants.eggSpin} className="portrait">
                        <img src={aboutMePic} alt="me" onLoad={() => { setImgLoaded(true); console.log('loaded'); }} />
                    </motion.div>
                </div>

                <div className="skills">
                    <div className="skilledIn">
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
                        <Icon icon={<TbBrandTailwind />} handleHover={handleHover} name="tailwindcss" size={skillSize} hoverColor="#3EBFF8" initialColor={iconColor} />
                        <Icon icon={<TbBrandReactNative />} handleHover={handleHover} name="react & react native" size={skillSize} hoverColor="#5ED3F3" initialColor={iconColor} />
                        <Icon icon={<TbBrandVue />} handleHover={handleHover} name="vue.js" size={skillSize} hoverColor="#41B883" initialColor={iconColor} />
                        <Icon icon={<TbBrandUnity />} handleHover={handleHover} name="unity" size={skillSize} hoverColor="#000000" initialColor={iconColor} />
                        <Icon icon={<TbBrandCSharp />} handleHover={handleHover} name="c#" size={skillSize} hoverColor="#764abc" initialColor={iconColor} />
                        <Icon icon={<TbBrandPython />} handleHover={handleHover} name="python" size={skillSize} hoverColor="#F7CC40" initialColor={iconColor} />
                        <Icon icon={<TbBrandCpp />} handleHover={handleHover} name="c++" size={skillSize} hoverColor="#0076F7" initialColor={iconColor} />
                        <Icon icon={<TbBrandJavascript />} handleHover={handleHover} name="javascript" size={skillSize} hoverColor="#E8D44D" initialColor={iconColor} />
                        <Icon icon={<TbBrandTypescript />} handleHover={handleHover} name="typescript" size={skillSize} hoverColor="#087ECE" initialColor={iconColor} />
                        <Icon icon={<TbBrandFirebase />} handleHover={handleHover} name="firebase" size={skillSize} hoverColor="#F79B01" initialColor={iconColor} />
                        <Icon icon={<TbBrandMongodb />} handleHover={handleHover} name="mongodb" size={skillSize} hoverColor="#00E15F" initialColor={iconColor} />
                        <Icon icon={<TbBrandMysql />} handleHover={handleHover} name="sql/mysql" size={skillSize} hoverColor="#FFA518" initialColor={iconColor} />
                        <Icon icon={<TbBrandGit />} handleHover={handleHover} name="git" size={skillSize} hoverColor="#E84D31" initialColor={iconColor} />
                        <Icon icon={<FaJava />} handleHover={handleHover} name="java" size={skillSize} hoverColor="#F0931C" initialColor={iconColor} />
                        <Icon icon={<TbBrandGraphql />} handleHover={handleHover} name="graphql" size={skillSize} hoverColor="#DE33A6" initialColor={iconColor} />
                        <Icon icon={<TbBrandRust />} handleHover={handleHover} name="rust" size={skillSize} hoverColor="#F75108" initialColor={iconColor} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
