import React, { useState } from 'react';
import {
    BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import Counter from './counter';
import Controls from './controls';
import Logo from './logo';
import Site from './site';

const App = (props) => {
    const [loading, setLoading] = useState(false);
    const [fading, setFading] = useState(false);
    const [overlayColor, setOverlayColor] = useState('hsl(155deg, 100%, 80%)');

    const startWebsite = (color) => {
        setLoading(false);
        setOverlayColor(color);
    };

    return (

        <div className="all">
            {loading && <Logo startWebsite={startWebsite} /> }
            {!loading
                && (
                    <>
                        {fading && (
                            <motion.div
                                className="overlay"
                                style={{ backgroundColor: overlayColor }}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                onAnimationComplete={() => setFading(false)}
                            />
                        )}

                        <Site />
                    </>

                )}
        </div>
    );
};

export default App;
