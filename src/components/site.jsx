import React, { useState } from 'react';
import {
    BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import Counter from './counter';
import Controls from './controls';

function Site() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.5 },
        },
    };
    const child = {
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const letters = Array.from('...');
    return (
        <div className="site">
            {/* <BrowserRouter>

                <NavBar />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/test/:id" element={<Test />} />
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </BrowserRouter> */}
            <p>website in progress
                <motion.span
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    transition={{ repeat: Infinity }}
                >
                    {letters.map((letter, index) => (
                        <motion.span variants={child} key={letter}>
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </motion.span>
            </p>

            <p style={{ fontStyle: 'italic', color: 'lightgray', fontSize: '70%' }}>check back later ;)</p>
        </div>
    );
}

const NavBar = (props) => {
    return (
        <ul id="navBar">
            <li>Logo</li>
            <li>Home</li>
            <li>About</li>
            <li>test id1</li>
            <li>test id2</li>
        </ul>
    );
};

const FallBack = (props) => {
    return <div>URL Not Found</div>;
};

const About = (props) => {
    return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
    return (
        <div>
            <div>Welcome</div>
            <Controls />
            <Counter />
        </div>
    );
};

const Test = (props) => {
    const { id } = useParams();
    return <div> ID: {id} </div>;
};

export default Site;
