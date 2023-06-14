import React, { useState } from 'react';
import {
    BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import Counter from './counter';
import Controls from './controls';
import Home from './home';

function Site() {
    return (
        <div className="site">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/test/:id" element={<Test />} />
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </BrowserRouter>
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
