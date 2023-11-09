import astroLogo from "../../../public/logos/astro.png";
import bootstrapLogo from "../../../public/logos/bootstrap.png";
import cssLogo from "../../../public/logos/css-3.png";
import gitLogo from "../../../public/logos/git.png";
import htmlLogo from "../../../public/logos/html.png";
import jsLogo from "../../../public/logos/js.png";
import laravelLogo from "../../../public/logos/laravel.png";
import phpLogo from "../../../public/logos/php.png";
import preactLogo from "../../../public/logos/preact.png";
import pythonLogo from "../../../public/logos/Python.svg";
import qwikLogo from "../../../public/logos/qwik.svg";
import reactLogo from "../../../public/logos/react.png";
import reduxLogo from "../../../public/logos/redux.svg";
import sassLogo from "../../../public/logos/sass.png";
import tsLogo from "../../../public/logos/typescript.png";

type skillType = {
    name: string,
    logo: ImageMetadata
}

export const skillsData: skillType[] = [
    {
        name: 'Astro',
        logo: astroLogo
    },
    {
        name: 'Bootstrap',
        logo: bootstrapLogo
    },
    {
        name: 'CSS',
        logo: cssLogo
    },
    {
        name: 'GIT',
        logo: gitLogo
    },
    {
        name: 'HTML',
        logo: htmlLogo
    },
    {
        name: 'Javascript',
        logo: jsLogo
    },
    {
        name: 'Laravel',
        logo: laravelLogo
    },
    {
        name: 'PHP',
        logo: phpLogo
    },
    {
        name: 'Preact',
        logo: preactLogo
    },
    {
        name: 'Python',
        logo: pythonLogo
    },
    {
        name: 'QWIK',
        logo: qwikLogo
    },
    {
        name: 'React',
        logo: reactLogo
    },
    {
        name: 'Redux',
        logo: reduxLogo
    },
    {
        name: 'SASS',
        logo: sassLogo
    },
    {
        name: 'Typescript',
        logo: tsLogo
    },
];