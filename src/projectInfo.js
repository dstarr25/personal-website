import memoryscapeImg from './img/memoryscape.png';
import ccbytImg from './img/ccbyt.gif';

export const PTypes = {
    UNITY: 'unity',
    WEB: 'web',
    OTHER: 'other',
};

export const projects = [
    {
        title: 'MemoryScape',
        timeFrame: 'Mar 2023 - Present',
        subtitle: 'DALI Lab, Dartmouth College',
        type: PTypes.UNITY,
        description: 'MemoryScape is a VR application that allows users to create and share memories in a virtual space. Users can create memories by placing objects in a virtual space and attaching a memory to that object. Users can then share their memories with others by sending them a link to their virtual space. The application is built using Unity and C# for the front-end and Firebase, Express.js, and Node.js for the back-end. I am currently working on the front-end of the application, specifically the UI and UX of the application.',
        image: memoryscapeImg,
        links: [
            {
                text: 'Contact For Repos',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'Unity, VR, C#, Firebase, Express.js, Node.js, JavaScript',
    },

    {
        title: 'Cookie Clicker but You Type',
        timeFrame: 'August 2020 - Sept 2022',
        subtitle: 'Personal Project, Steam Game',
        type: PTypes.UNITY,
        description: 'An incremental strategy-based typing game developed in Unity. Type words to earn keys, a currency which can be used to buy upgrades to earn keys faster. This addicting nature of progression helps hundreds of typists enjoy honing their skills.',
        image: ccbytImg,
        links: [
            {
                text: 'Steam Page',
                link: 'https://store.steampowered.com/app/2102810/Cookie_Clicker_but_You_Type',
            },
            {
                text: 'Contact For Repos',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'Unity, C#,',
    },

];

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

export const animVariants = {
    fadeAndSlideInFromLeft, fadeAndSlideInFromRight, fadeAndSlideInFromTop, fadeAndSlideInFromBottom,
};
