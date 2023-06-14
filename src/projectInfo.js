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
        description: 'Memoryscrape',
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
        description: 'Memoryscrape',
        links: [{
            text: 'Contact For Repos',
            link: 'mailto:devonstarr123@gmail.com',
        }],
        technologies: 'Unity, VR, C#, Firebase, Express.js, Node.js, JavaScript',
    },

];

const titleVariants = {
    hide: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
    },
};

export const animVariants = {
    titleVariants,
};
