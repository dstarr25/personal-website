import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Icon = ({ icon, size, hoverColor }) => {
    const controls = useAnimation();

    const handleHoverStart = async () => {
        controls.start({
            scale: 1.2,
            transition: { type: 'spring', stiffness: 400, damping: 12 },
        });
        controls.start({
            color: hoverColor,
            transition: { duration: 0.3 },
        });
    };

    const handleHoverEnd = async () => {
        controls.start({
            scale: 1,
            transition: { type: 'spring', stiffness: 400, damping: 12 },
        });
        controls.start({
            color: '#ffffff',
            transition: { duration: 0.1 },
        });
    };

    return (
        <IconContext.Provider
            value={{ size }}
        >
            <Link to="https://github.com/dstarr25">
                <motion.div
                    animate={controls}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    // whileHover={{
                    //     color: hoverColor,
                    //     scale: {
                    //         value: 1.5,
                    //         transition: {
                    //             type: 'spring',
                    //             stiffness: 100,
                    //             damping: 10,
                    //         },
                    //     },

                    // }}
                >
                    {icon}
                </motion.div>
            </Link>
        </IconContext.Provider>
    );
};

export default Icon;