import memoryscapeImg from './img/memoryscape.png';

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
        title: 'MemoryScape',
        timeFrame: 'Mar 2023 - Present',
        subtitle: 'DALI Lab, Dartmouth College',
        type: PTypes.UNITY,
        description: 'MemoryScape is a VR application that allows users to create and share memories in a virtual space. Users can create memories by placing objects in a virtual space and attaching a memory to that object. Users can then share their memories with others by sending them a link to their virtual space. The application is built using Unity and C# for the front-end and Firebase, Express.js, and Node.js for the back-end. I am currently working on the front-end of the application, specifically the UI and UX of the application.',
        image: memoryscapeImg,
        links: [{
            text: 'Contact For Repos',
            link: 'mailto:devonstarr123@gmail.com',
        }],
        technologies: 'Unity, VR, C#, Firebase, Express.js, Node.js, JavaScript',
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
