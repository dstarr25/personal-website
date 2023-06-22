const stiffness = 400;
const damping = 20;
const delay = 0.4;

const fadeAndSlideInFromLeft = {
    hide: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: { delay, type: 'spring', damping, stiffness },

    },
};

const fadeAndSlideInFromRight = { ...fadeAndSlideInFromLeft, hide: { ...fadeAndSlideInFromLeft.hide, x: 50 } };

const fadeAndSlideInFromTop = {
    hide: {
        opacity: 0,
        y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { delay, type: 'spring', damping, stiffness },
    },
};

const fadeAndSlideInFromBottom = { ...fadeAndSlideInFromTop, hide: { ...fadeAndSlideInFromTop.hide, y: 50 } };

const eggSpin = {
    hide: {
        scale: 0,
        rotate: -360,
    },
    show: {
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring', damping: 15, stiffness: 100, delay: 0.5,
        },
    },
};

const animVariants = {
    fadeAndSlideInFromLeft, fadeAndSlideInFromRight, fadeAndSlideInFromTop, fadeAndSlideInFromBottom, eggSpin,
};

export default animVariants;
