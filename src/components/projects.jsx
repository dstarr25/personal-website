import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <motion.div
            className="projectsPage"
            initial={{ top: '100vh' }}
            animate={{ top: '0vh' }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}

        >
            <div className="titleText">
                <span>Projects</span>
                <span />
                <span />
            </div>
        </motion.div>
    );
}

export default Projects;
