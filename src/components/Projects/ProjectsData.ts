import custom from '../../images/custom.png';

type project = {
    id : number,
    name : string,
    images : ImageMetadata[],
    description: string,
    codeLink : string,
    liveLink : string
}
export const ProjectsData: project[] = [
    {
        id : 0,
        name : "Project 1",
        images : [custom],
        description : "Lorem Ipsum cos tam",
        codeLink : "",
        liveLink : ""
    }
];