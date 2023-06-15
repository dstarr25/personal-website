import React, { useState } from 'react';
import {
    BrowserRouter, Routes, Route, NavLink, useParams, Router, useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Counter from './counter';
import Controls from './controls';
import Home from './home';
import NavItem from './navItem';
import resume from '../resume.pdf';
import About from './about';
import Projects from './projects';

function Site() {
    return (
        <div className="site">
            <BrowserRouter>
                <Nav />
                <AnimatedRoutes />
            </BrowserRouter>
        </div>
    );
}

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<FallBack />} />
            </Routes>

        </AnimatePresence>
    );
};

const navProps = [
    { text: 'home', path: '', activeColor: '#ffffff' },
    { text: 'about', path: 'about', activeColor: '#F07F75' },
    { text: 'projects', path: 'projects', activeColor: '#111111' },
];

const Nav = (props) => {
    const [navColor, setNavColor] = useState(navProps[0].activeColor);
    return (
        <motion.nav id="navBar" animate={{ color: navColor }} transition={{ duration: 1 }}>
            {navProps.map((item) => (
                <NavItem setNavColor={() => setNavColor(item.activeColor)} text={item.text} path={item.path} key={item.text} />
            ))}
            <NavItem text="resume" resume path={resume} />
        </motion.nav>
    );
};

const FallBack = (props) => {
    return <div>URL Not Found</div>;
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
