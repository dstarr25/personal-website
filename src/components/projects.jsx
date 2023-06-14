import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import { PTypes, projects, animVariants } from '../projectInfo';
import Project from './project';

function Projects() {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null);
    return (
        <motion.div
            className="projectsPage"
            initial={{ top: '100vh' }}
            animate={{ top: '0vh' }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onClick={() => console.log('scrollYProgress:', scrollYProgress.current)}

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
                <Project project={project} index={index} />
            ))}
            <div style={{ height: 100 }} ref={scrollRef} />

            <motion.div
                className="scrollArrow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
            >
                <LuChevronDown />
            </motion.div>

        </motion.div>
    );
}

export default Projects;
