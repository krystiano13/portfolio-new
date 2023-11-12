import custom from '../../../public/contactIcons/github.png'

import p1 from '../../../public/screenshots/p1.png';
import p2 from '../../../public/screenshots/p2.png';

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
        description : "This is a landing page that was created for the purposes of recruitment for the company\n" +
            "AdRespect. The project includes a fully functional slider, a photo gallery, and smooth animations of\n" +
            "its elements during scrolling. To maximize the project's performance, I rewrote it later using the\n" +
            "Astro framework. In addition to the mentioned technology, I also used Bootstrap, SCSS, AOS.js, and\n" +
            "Macy.js.",
        codeLink : "https://github.com/krystiano13/astro_rtask",
        liveLink : "https://krystiano13.github.io/astro_rtask/",
        techStack : ['Astro', 'Macy.js', 'AOS.js', 'Bootstrap', 'SCSS']
    },

    {
        id : 1,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
    },

    {
        id : 2,
        name : "Project 1",
        images : [custom.src],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : "",
        techStack : []
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