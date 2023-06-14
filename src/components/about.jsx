import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            className="aboutPage"
            initial={{ top: '100vh' }}
            animate={{ top: '0vh' }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}

        >
            About
        </motion.div>
    );
}

export default About;
