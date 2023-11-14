import custom from '../../../public/contactIcons/github.png'

import p1 from '../../../public/screenshots/p1.png';
import p2 from '../../../public/screenshots/p2.png';
import p3 from '../../../public/screenshots/p3.png';
import p4 from '../../../public/screenshots/p4.png';
import t1 from '../../../public/screenshots/t1.png';
import t2 from '../../../public/screenshots/t2.png';

type project = {
    id : number,
    name : string,
    images : string[],
    description: string,
    codeLink : string,
    liveLink : string,
    techStack : string[]
}
export const ProjectsData: project[] = [
    {
        id : 0,
        name : "GiardDesign",
        images : [p1.src, p2.src],
        description : "This is a landing page that was created for the purposes of recruitment for the company AdRespect. The project includes a fully functional slider, a photo gallery, and smooth animations of" +
            "its elements during scrolling. To maximize the project's performance, I rewrote it later using the" +
            "Astro framework. In addition to the mentioned technology, I also used Bootstrap, SCSS, AOS.js, and" +
            "Macy.js. \n",
        codeLink : "https://github.com/krystiano13/astro_rtask",
        liveLink : "https://krystiano13.github.io/astro_rtask/",
        techStack : ['Astro', 'Macy.js', 'AOS.js', 'Bootstrap', 'SCSS']
    },

    {
        id : 1,
        name : "Training Tracker",
        images : [t1.src, t2.src],
        description : "This is a fullstack application project that I use for outlining exercises in my training plan. It" +
            "calculates the training volume for a given exercise and, in the case of editing, calculates progress" +
            "in that exercise as a percentage. The application features a fully functional login and registration" +
            "system, as well as a connection to a database. The technologies I used on the frontend include " +
            "Astro, Bootstrap, and Preact, while on the backend, I used PHP and MySQL.",
        codeLink : "https://github.com/krystiano13/trainingTracker",
        liveLink : "https://github.com/krystiano13/trainingTracker",
        techStack : ['Astro','Preact','TS','PHP','MySQL','Bootstrap']
    },

    {
        id : 2,
        name : "Old 3D Portfolio",
        images : [p3.src, p4.src],
        description : "This is a website project that was intended to present the key information about me using" +
            "animated cards and a 3D solar system. To create it, I used various frontend and 3D technologies" +
            "including React, SASS, THREE.js and React-Three-Fiber",
        codeLink : "https://github.com/krystiano13/portfolio3d",
        liveLink : "https://krystiano13.github.io/portfolioLiveTest/",
        techStack : ['React', 'THREE.js', 'SCSS', 'GSAP']
    },

    {
        id : 3,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
    },

    {
        id : 4,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
    },

    {
        id : 5,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
    },
    {
        id : 6,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
    },
];