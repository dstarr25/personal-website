import memoryscapeImg from './img/memoryscape.png';
// import ccbytImg from './img/ccbyt.gif';
// import colorsudokuImg from './img/colorsudoku.gif';
// import diceartImg from './img/diceArt.gif';
import veridiumImg from './img/veridium.jpg';
import dalimuseumImg from './img/dalimuseum.png';
import intrepidImg from './img/intrepid.png';
// import reactnotesImg from './img/reactNotes.gif';

const PTypes = {
    UNITY: 'unity',
    WEB: 'web',
    OTHER: 'other',
};

export default [
    {
        title: 'MemoryScape',
        timeFrame: 'Mar 2023 - May 2023',
        subtitle: 'DALI Lab, Dartmouth College',
        type: PTypes.UNITY,
        description: 'MemoryScape is a VR application that allows users to look back at past times in their lives and relive their memories using Spotify and Google Photos. Users first sign into their Spotify and Google Photos accounts and then enter VR to view a procedurally generated room with pictures from the time frame they would like to view, and songs from that time frame playing in the background. The project uses an Express.js backend to send users a frontend webpage that allows them to login to their accounts, and uses Firebase to store authentication for Google Photos and Spotify which is then grabbed in the VR app to display the user\'s memories.',
        image: memoryscapeImg,
        links: [
            {
                text: 'Contact For Repos',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'Unity, Oculus, C#, Firebase, Express.js, Node.js, JavaScript',
    },
    {
        title: 'Movies Database Higher/Lower',
        timeFrame: 'August 2023',
        subtitle: 'COSC 61 - Database Systems',
        type: PTypes.WEB,
        description: 'This project involves the creation of a MySQL database from a large dataset of movies found online kaggle.com. We created a structure that could efficiently store our movies data, and implemented this structure using the initial data. Ultimately we have used the database to create a web game that incorporates several metrics about the movies and has the user guess which movie has a higher or lower metric.',
        image: 'https://github.com/john-davanzo/cs61_final_project_john_devon/raw/main/milestone_4/img/gameplay.gif',
        links: [
            {
                text: 'Contact For Repo',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'React, MySQL, AWS EC2, Express.js',
    },
    {
        title: 'Intrepid',
        timeFrame: 'May 2023',
        subtitle: 'COSC 52 - Full Stack Web Development',
        type: PTypes.WEB,
        description: 'A mobile app that encourages users to get outside their comfort zones and try new things. Users can attempt challenges to earn points, and also create challenges that they would like to see others try. I worked with 5 other members to build out the app in a few weeks. The application is built using React Native and Expo, with an Express.js and MongoDB backend.',
        image: intrepidImg,
        links: [
            {
                text: 'Contact For Repo',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'React Native, Expo, Express.js, MongoDB, AWS S3, JavaScript, Node.js',
    },
    {
        title: 'Cookie Clicker but You Type',
        timeFrame: 'August 2020 - Sept 2022',
        subtitle: 'Personal Project, Steam Game',
        type: PTypes.UNITY,
        description: 'An incremental strategy-based typing game developed in Unity. Type words to earn keys, a currency which can be used to buy upgrades to earn keys faster. This addicting nature of progression helps hundreds of typists in many different countries enjoy honing their skills. I released it on Steam in Sept 2022 and made one small update to it, adding MacOS and Linux support as well as some post-release bug fixes.',
        image: 'https://s11.gifyu.com/images/SQlF3.gif',
        links: [{
            text: 'Steam Page',
            link: 'https://store.steampowered.com/app/2102810/Cookie_Clicker_but_You_Type',
        },
        {
            text: 'Contact For Repo',
            link: 'mailto:devonstarr123@gmail.com',
        },
        ],
        technologies: 'Unity, C#',
    },
    {
        title: 'Dali Museum Eye Tracking Exhibit',
        timeFrame: 'Jan 2022 - June 2022',
        subtitle: 'DALI Lab, Dartmouth College',
        type: PTypes.UNITY,
        description: 'An exhibit built in collaboration with the Dali Museum in St. Petersburg, Florida. The exhibit is a desktop application that tracks users\' eyes as they explore the works of Salvador Dali, and informs them of their eye tracking data - the path their eyes took while inspecting the painting, spots they spent the most time looking at, etc. The exhibit is built using Unity and C#, along with Tobii Pro Nano eye trackers',
        image: dalimuseumImg,
        links: [
            {
                text: 'Contact For Repo',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'Unity, C#, Tobii Pro Nano Eye Tracker',
    },
    {
        title: 'Color Sudoku',
        timeFrame: 'May 2022',
        subtitle: 'Personal Project',
        type: PTypes.WEB,
        description: 'A color-based sudoku game built using React. The game is built using React and JavaScript in combination with sudoku solving algorithms and events, and is hosted on render. The game is fully playable - allowing users to generate a sudoku board with only one solution, check whether they are on the right track, and solve the board automatically if they wish. The game is also responsive, and can be played on mobile devices as touch is the only input required to play.',
        image: 'https://s12.gifyu.com/images/SQlFx.gif',
        links: [
            {
                text: 'Try it out!',
                link: 'https://color-sudoku.onrender.com',
            },
            {
                text: 'View Repo',
                link: 'https://github.com/dstarr25/color-sudoku',
            },
        ],
        technologies: 'React, JavaScript, HTML, CSS',
    },
    {
        title: 'Dice Mosaic Generator',
        timeFrame: 'Mar 2022',
        subtitle: 'Personal Project',
        type: PTypes.WEB,
        description: 'A web app that generates beautiful mosaics using dice. Users can upload an image, and the app will generate a mosaic using dice. The app is built using React and JavaScript in combination with image matrix manipulation to generate mosaics, and is hosted on render. Users can specify what size they want their mosaic to be, and whether to use black or white dice.',
        image: 'https://s11.gifyu.com/images/SQlF9.gif',
        links: [{
            text: 'Try it out!',
            link: 'https://dice-art.onrender.com',
        },
        {
            text: 'View Repo',
            link: 'https://github.com/dstarr25/dice-art/tree/noImages',
        },
        ],
        technologies: 'React, JavaScript, HTML, CSS',
    },
    {
        title: 'Veridium',
        timeFrame: 'Sept 2022 - Mar 2023',
        subtitle: 'DALI Lab, Dartmouth College',
        type: PTypes.UNITY,
        description: 'A VR application that visualizes atomic crystal structures in 3D. Users can view, manipulate, and expand structures to better understand their properties. There are also lectures for certain elements that the app walks users through to help them wrap their head around these structures. The project is in collaboration with the chemistry department at Dartmouth College, and has been used in the classroom to teach students how certain elements are structured in solid-state chemistry.',
        image: veridiumImg,
        links: [
            {
                text: 'Contact For Repo',
                link: 'mailto:devonstarr123@gmail.com',
            },
        ],
        technologies: 'Unity, C#, Oculus',
    },
    {
        title: 'React Notes App',
        timeFrame: 'April 2023',
        subtitle: 'Personal Project',
        type: PTypes.WEB,
        description: 'Web app which uses React components to display notes which can be edited, dragged, and deleted. The app uses firebase to store notes, and allows users to sign in with their Google account to create their own personal page of notes that only they can access. It is hosted on render.',
        image: 'https://s12.gifyu.com/images/SQlFw.gif',
        links: [{
            text: 'Try it out!',
            link: 'https://devon-notes.onrender.com/',
        },
        {
            text: 'View Repo',
            link: 'https://github.com/dstarr25/react-notes',
        },
        ],
        technologies: 'React, JavaScript, Firebase, HTML, SCSS',
    },
];
