import React, { useEffect, useRef, useState } from 'react';

const speed = { x: 3, y: 3 };
const maxHits = 1;
const colorDiff = 30;

const aspectRatio = 271.3 / 170.3;

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = (s, l, currColor) => {
    // get random numbers till color diff is large enough
    let h = getRandomNumber(360);
    if (currColor === undefined) return `hsl(${h}deg, ${s}%, ${l}%)`;
    const currColorDegree = currColor.split('deg')[0].split('(')[1];
    while (Math.abs(h - currColorDegree) < colorDiff) h = getRandomNumber(360);
    // console.log('h', h);
    // console.log('currColor', currColorDegree);
    // console.log('diff', Math.abs(h - currColorDegree));
    // return color in the right format
    const color = `hsl(${h}deg, ${s}%, ${l}%)`;
    // console.log(color);
    return color;
};

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

const Logo = (props) => {
    const [fillColor, setFillColor] = useState(null);
    const [hits, setHits] = useState(0);
    const [pos, setPos] = useState({
        x: 0, y: 0, xSpeed: speed.x, ySpeed: speed.y,
    });
    const logoref = useRef(null);

    const startIfReady = () => {
        // console.log('hits', hits);
        if (hits === -1) {
            // start website
            props.startWebsite(fillColor);
            setHits(-2);
            return true;
        }
        return false;
    };

    const moveElt = () => {
        if (hits === -2) return;
        const element = logoref.current;
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const appWidth = window.innerWidth;
        const appHeight = window.innerHeight;

        const sendDirection = (edge, rSpeed) => {
            const topLeft = { x: 0, y: 0 };
            const bottomLeft = { x: 0, y: appHeight - elementHeight };
            const bottomRight = { x: appWidth - elementWidth, y: appHeight - elementHeight };
            const topRight = { x: appWidth - elementWidth, y: 0 };
            const destinations = {
                'top': {
                    0: bottomLeft,
                    2: bottomRight,
                    currPos: { x: pos.x, y: speed.y * 2 },
                    normal: { x: 0, y: 1 },
                },
                'right': {
                    0: topLeft,
                    2: bottomLeft,
                    currPos: { x: appWidth - elementWidth - 2 * speed.x, y: pos.y },
                    normal: { x: -1, y: 0 },
                },
                'bottom': {
                    0: topLeft,
                    2: topRight,
                    currPos: { x: pos.x, y: appHeight - elementHeight - speed.y * 2 },
                    normal: { x: 0, y: -1 },
                },
                'left': {
                    0: topRight,
                    2: bottomRight,
                    currPos: { x: 2 * speed.x, y: pos.y },
                    normal: { x: 1, y: 0 },
                },
            };
            const dest = destinations[edge][Math.sign(rSpeed) + 1];
            console.log('destination:', dest);

            const { currPos } = destinations[edge];
            const s = Math.sqrt(speed.x ** 2 + speed.y ** 2);

            const toDest = { x: dest.x - currPos.x, y: dest.y - currPos.y };
            const dist = Math.sqrt(toDest.x ** 2 + toDest.y ** 2);
            const normalToDest = { x: toDest.x / dist, y: toDest.y / dist };
            const newSpeed = { x: normalToDest.x * s, y: normalToDest.y * s };

            // only set the pos if the angle formed between the normal and the new speed is between 30 and 60 degrees
            const dotProduct = destinations[edge].normal.x * newSpeed.x + destinations[edge].normal.y * newSpeed.y;
            const normalMag = Math.sqrt(destinations[edge].normal.x ** 2 + destinations[edge].normal.y ** 2);
            const newSpeedMag = Math.sqrt(newSpeed.x ** 2 + newSpeed.y ** 2);
            const angle = (Math.acos(dotProduct / (normalMag * newSpeedMag)) * 180) / Math.PI;
            console.log('angle', angle);
            if (angle < 25 || angle > 65) return false;

            setPos((p) => ({ ...currPos, xSpeed: newSpeed.x, ySpeed: newSpeed.y }));
            setHits(-1);
            return true;
        };

        // console.log('x', pos.x, 'y', pos.y);
        // console.log({
        //     ...pos,
        //     x: pos.x + pos.xSpeed,
        //     y: pos.y + pos.ySpeed,
        // });
        setPos((p) => ({
            ...p,
            x: p.x + p.xSpeed,
            y: p.y + p.ySpeed,
        }));

        // right edge
        if (pos.x + elementWidth >= appWidth - speed.x) {
            if (startIfReady()) return;
            setFillColor(getRandomColor(100, 80, fillColor));

            if (hits >= maxHits && sendDirection('right', pos.ySpeed)) return;

            setPos((p) => ({ ...p, x: appWidth - elementWidth - speed.x * 2, xSpeed: -speed.x }));
            setHits((h) => h + 1);
        }

        // bottom edge
        if (pos.y + elementHeight >= appHeight - speed.y) {
            if (startIfReady()) return;
            setFillColor(getRandomColor(100, 80, fillColor));

            // console.log('hitting');
            if (hits >= maxHits && sendDirection('bottom', pos.xSpeed)) return;
            setPos((p) => ({ ...p, y: appHeight - elementHeight - speed.y * 2, ySpeed: -speed.y }));
            setHits((h) => h + 1);
        }

        // left edge
        if (pos.x <= 0) {
            if (startIfReady()) return;
            setFillColor(getRandomColor(100, 80, fillColor));

            // console.log('hitting');
            if (hits >= maxHits && sendDirection('left', pos.ySpeed)) return;

            setPos((p) => ({ ...p, x: 1, xSpeed: speed.x }));
            setHits((h) => h + 1);
        }

        // top edge
        if (pos.y <= 0) {
            if (startIfReady()) return;
            setFillColor(getRandomColor(100, 80, fillColor));

            // console.log('hitting');
            if (hits >= maxHits && sendDirection('top', pos.xSpeed)) return;

            setPos((p) => ({ ...p, y: 1, ySpeed: speed.y }));
            setHits((h) => h + 1);
        }
    };

    useEffect(() => {
        const element = logoref.current;
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const appWidth = window.innerWidth;
        const appHeight = window.innerHeight;

        // console.log('app width', appWidth, 'app height', appHeight);
        // console.log(`range: ${elementWidth} to ${appWidth - 2 * elementWidth}`);
        const randPos = { x: randomInt(elementWidth, appWidth - 2 * elementWidth), y: randomInt(elementHeight, appHeight - 2 * elementHeight) };
        // console.log('rand pos', randPos);
        setFillColor(getRandomColor(100, 80));
        setPos({ ...randPos, xSpeed: -speed.x, ySpeed: -speed.y });
    }, [logoref]);

    const interval = useInterval(() => {
        moveElt();
    }, 10);

    // if (hits < 0) return null;
    return (
        <div className="logoHolder">
            <div className="logo" style={{ top: pos.y, left: pos.x, zIndex: 999 }} ref={logoref}>
                <svg version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="180.9pt"
                    height="113.5pt"
                    viewBox="0 0 180.9 113.5"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                    </metadata>
                    <g transform="translate(-11.000000,120) scale(0.0666,-0.0666)"
                        fill={fillColor}
                        stroke="none"
                    >
                        <path d="M147 1348 c3 -216 7 -395 9 -397 2 -2 97 -5 211 -5 174 -1 219 2 278
18 136 36 225 99 273 190 36 71 43 214 13 298 -37 108 -99 176 -212 233 -89
46 -152 55 -372 55 l-205 0 5 -392z m437 0 c34 -49 5 -118 -49 -118 -24 0 -25
2 -25 70 l0 70 29 0 c20 0 35 -8 45 -22z"
                        />
                        <path d="M972 1218 l3 -273 181 -3 181 -2 7 61 c11 114 14 109 -49 109 -42 0
-55 3 -55 15 0 9 9 15 24 15 49 0 56 8 56 71 l0 59 -40 0 c-33 0 -40 3 -40 20
0 17 7 20 45 20 l45 0 0 90 0 90 -180 0 -180 0 2 -272z"
                        />
                        <path d="M1370 1483 c1 -4 29 -127 64 -273 l62 -265 117 -3 c114 -3 117 -2
122 20 6 26 105 520 105 525 0 2 -44 3 -99 3 l-98 0 -7 -50 c-12 -86 -19 -90
-36 -20 l-16 65 -107 3 c-59 1 -107 -1 -107 -5z"
                        />
                        <path d="M1962 1464 c-100 -50 -147 -140 -140 -267 4 -83 24 -130 75 -180 52
-53 98 -71 173 -71 119 0 225 70 251 166 17 63 7 176 -21 233 -27 57 -81 112
-126 131 -56 23 -152 18 -212 -12z m152 -230 c29 -29 11 -84 -27 -84 -30 0
-47 18 -47 50 0 47 42 66 74 34z"
                        />
                        <path d="M2353 1219 c3 -149 8 -273 11 -276 3 -3 46 -2 97 2 l92 7 -6 51 c-7
56 -3 55 33 -11 l25 -47 125 0 125 0 -4 265 c-2 146 -5 268 -8 273 -2 4 -53 7
-113 7 l-109 0 -3 -62 -3 -63 -33 63 -32 62 -102 0 -101 0 6 -271z"
                        />
                        <path d="M522 921 c-111 -38 -186 -139 -187 -251 0 -49 5 -65 30 -101 17 -24
58 -65 90 -92 33 -26 62 -52 63 -57 2 -6 -27 -10 -71 -10 l-74 0 -7 -121 c-4
-67 -5 -123 -3 -126 3 -2 49 -9 103 -15 233 -25 390 52 425 208 11 49 10 60
-7 102 -16 38 -30 53 -79 83 -33 20 -62 44 -64 54 -5 26 26 45 71 45 l38 0 0
144 0 144 -31 6 c-68 13 -243 6 -297 -13z"
                        />
                        <path d="M1898 693 l-88 -4 0 -269 0 -270 49 0 c26 0 69 -3 95 -6 l46 -7 0 45
c0 25 3 48 7 51 12 13 33 -16 39 -54 l7 -39 90 0 90 0 -7 40 c-3 22 -17 64
-29 92 -23 52 -23 54 -5 84 51 86 41 213 -21 275 -37 37 -122 71 -165 67 -12
-1 -60 -4 -108 -5z m143 -223 c24 -13 26 -65 3 -74 -37 -14 -53 -6 -60 28 -9
53 11 70 57 46z"
                        />
                        <path d="M2335 691 l-90 -6 4 -265 c2 -146 4 -266 5 -266 0 -1 43 -4 94 -8
l92 -7 0 51 c0 72 27 66 40 -10 l5 -35 90 0 90 0 -3 35 c-2 19 -15 60 -28 90
l-24 55 25 49 c51 100 27 228 -53 280 -36 24 -111 47 -142 44 -8 -1 -55 -4
-105 -7z m146 -221 c21 -12 25 -50 7 -68 -7 -7 -25 -12 -40 -12 -27 0 -28 2
-28 45 0 39 3 45 21 45 11 0 29 -5 40 -10z"
                        />
                        <path d="M890 596 l0 -95 53 -3 52 -3 5 -175 5 -175 114 -3 114 -3 -4 178 -4
178 53 3 52 3 0 48 c0 27 -3 69 -6 95 l-7 46 -213 0 -214 0 0 -94z"
                        />
                        <path d="M1346 463 c-15 -126 -29 -247 -32 -270 l-6 -43 101 0 c111 0 105 -3
113 70 2 19 9 25 28 25 22 0 26 -6 33 -50 l8 -51 97 4 c53 2 98 5 99 6 1 1
-90 422 -112 514 -5 22 -8 22 -154 22 l-148 0 -27 -227z m214 -65 c0 -7 3 -23
6 -35 6 -20 3 -23 -23 -23 -27 0 -29 2 -25 35 3 26 9 35 23 35 10 0 19 -6 19
-12z"
                        />
                    </g>
                </svg>

            </div>

        </div>
    );
};

export default Logo;
