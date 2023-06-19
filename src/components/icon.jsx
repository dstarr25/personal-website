import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Icon = ({ icon, size, hoverColor, link, setHoveredIcon, name }) => {
    const controls = useAnimation();

    const handleHoverStart = async () => {
        setHoveredIcon(name);
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
            transition: { duration: 0.3 },
        });
    };

    return (
        <IconContext.Provider
            value={{ size }}
        >
            <Link to={link}>
                <motion.div
                    initial={{ color: '#ffffff' }}
                    animate={controls}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    {icon}
                </motion.div>
            </Link>
        </IconContext.Provider>
    );
};

export default Icon;
