import React from 'react';
import { motion } from 'framer-motion';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import Icon from './icon';

function randomInt(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result);
    return result;
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
    const iconSize = '40px';
    return (
        <motion.div
            className="homePage"
            initial={{ top: '0vh' }}
            // animate={{ opacity: 1 }}
            exit={{ top: '-100vh' }}
            transition={{ duration: 1, ease: 'easeInOut' }}

        >
            <motion.div
                style={{ display: 'flex' }}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
                {Array.from(greeting).map((letter, index) => (
                    <motion.span variants={child()}>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                style={{ display: 'flex', flexDirection: 'row' }}
                initial={{ opacity: 0, y: 100, gap: '100px' }}
                animate={{ opacity: 1, y: 0, gap: '30px' }}
                transition={{ delay: 3.5, type: 'spring', damping: 12, stiffness: 100 }}
            >
                <Icon icon={<LuGithub />} size={iconSize} hoverColor="#E78793" link="https://github.com/dstarr25" />
                <Icon icon={<LuMail />} size={iconSize} hoverColor="#FFE793" link="mailto:devonstarr123@gmail.com" />
                <Icon icon={<LuLinkedin />} size={iconSize} hoverColor="#94DBFF" link="https://www.linkedin.com/in/devon-starr/" />
            </motion.div>
        </motion.div>
    );
}

export default Home;
