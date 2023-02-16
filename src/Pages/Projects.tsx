import Button  from '../components/Button'
//thumbnails
import proj1lg from '../assets/images/thumbnails/proj1-lg.webp'
import proj1sm from '../assets/images/thumbnails/proj1-sm.webp'
import proj2lg from '../assets/images/thumbnails/proj2-lg.webp'
import proj2sm from '../assets/images/thumbnails/proj2-sm.webp'
import proj3lg from '../assets/images/thumbnails/proj3-lg.webp'
import proj3sm from '../assets/images/thumbnails/proj3-sm.webp'
import proj4lg from '../assets/images/thumbnails/proj4-lg.webp'
import proj4sm from '../assets/images/thumbnails/proj4-sm.webp'
import proj5lg from '../assets/images/thumbnails/proj5-lg.webp'
import proj5sm from '../assets/images/thumbnails/proj5-sm.webp'
import proj6lg from '../assets/images/thumbnails/proj6-lg.webp'
import proj6sm from '../assets/images/thumbnails/proj6-sm.webp'


type projectType = [number, string, string[], string[]];
const projects: projectType[] =
    [
        [1, "Design Portfolio", [proj1sm, proj1lg], ["HTML", "CSS"]],
        [2, "E-Learning Landing Page", [proj2sm, proj2lg], ["HTML", "CSS"]],
        [3, "Todo Web App", [proj3sm, proj3lg], ["HTML", "CSS", "Javascript"]],
        [4, "Entertainment Web App", [proj4sm, proj4lg], ["HTML", "CSS", "Javascript"]],
        [5, "Memory Game", [proj5sm, proj5lg], ["HTML", "CSS", "Javascript"]],
        [6, "Art Gallery Showcase", [proj6sm, proj6lg], ["HTML", "CSS", "Javascript"]],
    ];


type ProjectProps = { thumbnails: string[]; techs: string[]; title: string };
const Project = ({ thumbnails, techs, title }: ProjectProps) => {
    return (
        <div className="desktop:relative desktop:w-[540px] group mb-10 px-4">
            <img src={window.innerWidth >= 1280 ? thumbnails[0] : thumbnails[1]}
                className="w-[343px] h-[253px] desktop:w-[540px] desktop:h-[400px]"
                alt={title}>
                </img>
            <div className="upppercase text-m pt-5">{title}</div>
            <div className="flex text-body pt-1">{techs.map((tech) => (<span key={tech} className="pr-4">{tech}</span>))}</div>
            <div className="flex mt-5 mb-10">
            <Button className="mr-8 uppercase">View Project</Button>
            <Button className="uppercase">View Code</Button>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="w-full bg-black desktop:px-40 desktop:py-10">
            <div className="flex justify-between items-center pb-4">
                <div className="text-[2.5rem] font-bold mx-4 desktop:text-xl desktop:pb-6">Projects</div>
                <div className="flex justify-center tablet:justify-start pt-6 mb-8">
                    <Button className="text-xs uppercase mr-10">Contact Me</Button>
                </div>
            </div>
            <div className="flex flex-col tablet:grid tablet:grid-cols-2 mx-2">
                {projects.map((project) => {
                    return (
                        <Project key={project[0]} thumbnails={project[2]} title={project[1]} techs={project[3]} />
                    )
            })}</div>
        </div>
    )
    
};

export default Projects;