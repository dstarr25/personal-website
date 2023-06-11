import React, { useState } from 'react';
import {
    BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';
import Logo from './logo';
import Site from './site';

const App = (props) => {
    const [loading, setLoading] = useState(true);
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
                        <div className="overlay" style={{ backgroundColor: overlayColor }} />
                        <Site />
                    </>

                )}
        </div>
    );
};

export default App;
