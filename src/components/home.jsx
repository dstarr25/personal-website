import React from 'react';
import { motion } from 'framer-motion';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import Icon from './icon';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Home() {
    const child = () => ({
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: randomInt(-200, 200),
            y: randomInt(-200, 200),
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    });

    const greeting = 'Hello. My name is Devon.';

    return (
        <div className="homePage">
            <motion.div
                style={{ display: 'flex' }}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
                {Array.from(greeting).map((letter, index) => (
                    <motion.span variants={child()} key={letter}>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
                <Icon icon={<LuGithub />} size="40px" hoverColor="#E78793" />
                <Icon icon={<LuMail />} size="40px" hoverColor="#FFE793" />
                <Icon icon={<LuLinkedin />} size="40px" hoverColor="#94DBFF" />
            </motion.div>
        </div>
    );
}

const iconContextValue = {
    color: 'white',
    size: '40px',
};

const GithubIcon = () => (
    <IconContext.Provider
        value={iconContextValue}
    >
        <div>
            <LuGithub />
        </div>
    </IconContext.Provider>
);

const MailIcon = () => (
    <IconContext.Provider
        value={iconContextValue}
    >
        <div>
            <LuMail />
        </div>
    </IconContext.Provider>
);

const LinkedinIcon = () => (
    <IconContext.Provider
        value={{ ...iconContextValue, className: 'linkedinIcon' }}
    >
        <div>
            <LuLinkedin />
        </div>
    </IconContext.Provider>
);

export default Home;
