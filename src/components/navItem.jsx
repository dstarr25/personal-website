import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const totalLength = 12;

const NavItem = ({ text, path, setNavColor, resume }) => {
    const [fullText, setFullText] = useState(text);
    const [active, setActive] = useState(path === '');
    const [hovered, setHovered] = useState(false);

    const animate = () => {
        // console.log(`Hello from the ${text} animate function`);
        // console.log('hovered', hovered);
        // console.log('active', active);
        if (!hovered && !active && fullText.length === text.length) return;
        if (fullText.length < totalLength && (hovered || active)) { // has to increase
            setFullText((current) => {
                return (text.length === current.length ? ' ' : '-') + current;
            });
            return;
        }
        if (!hovered && !active && fullText.length > text.length) { // has to decrease
            setFullText((current) => {
                return current.substring(1);
            });
        }
    };

    // useEffect(() => {

    // }, []);

    const interval = useInterval(() => {
        animate();
    }, 100);

    if (resume) {
        return (
            <a
                href={path}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => {
                    console.log('resume hovered');
                    setHovered(true);
                }}
                onMouseLeave={() => setHovered(false)}
            >
                {fullText}
            </a>
        );
    }

    return (
        <NavLink
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            to={path}
            className={({ isActive }) => {
                setActive(isActive);
                if (isActive) setNavColor();
            }}
        >
            {fullText}
        </NavLink>
    );
};

export default NavItem;
