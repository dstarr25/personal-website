import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useInView, useAnimation } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import { PTypes, projects, animVariants } from '../projectInfo';
import Project from './project';

function Projects() {
    // const { scrollYProgress } = useScroll();
    const bottomRef = useRef(null);
    const bottomInView = useInView(bottomRef);
    const animate = useAnimation();

    const startScrollAnim = async () => {
        animate.start({
            opacity: 1,
            transition: { duration: 0.5 },
        });
        animate.start({
            y: -20,
            transition: { duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
        });
    };

    const stopScrollAnim = async () => {
        animate.start({
            opacity: 0,
            transition: { duration: 0.5 },
        });
        animate.start({
            y: 0,
            transition: { duration: 1 },
        });
    };

    useEffect(() => {
        console.log('isInView:', bottomInView);
        if (!bottomInView) startScrollAnim();
        else stopScrollAnim();
    }, [bottomInView]);

    return (
        <motion.div
            className="projectsPage"
            initial={{ top: '100vh' }}
            animate={{ top: '0vh' }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            // onClick={() => console.log('scrollYProgress:', scrollYProgress.current)}

        >
            <div className="titleText">
                <motion.span
                    initial="hide"
                    whileInView="show"
                    variants={animVariants.titleVariants}
                    transition={{ delay: 0.5, type: 'spring', damping: 12, stiffness: 300 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.span>
            </div>
            {projects.map((project, index) => (
                <Project
                    project={project}
                    index={index}
                    p2ref={index === 1 ? bottomRef : null}
                />
            ))}
            {/* <div style={{ height: 10 }} ref={bottomRef} /> */}

            <motion.div
                className="scrollArrow"
                initial={{ x: '-50%' }}
                // animate={{ opacity: bottomInView ? 0 : 1 }}
                animate={animate}
                // transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
                <span>see more</span>
                <LuChevronDown />
            </motion.div>

        </motion.div>
    );
}

export default Projects;
