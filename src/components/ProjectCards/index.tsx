import { PROJECTS } from "@/global/types";
import ProjectCard from "./ProjectCard";

const ProjectCards = (props: PROJECTS) => {
    const projects = Object.values(props).map((projectDetails) => {
        if (projectDetails.hide) {
            return null;
        }

        return <ProjectCard key={projectDetails.name}  {...projectDetails} />
    })

    return (
        <div className={`flex flex-row gap-sm flex-justify-center flex-align-center`}>
            {projects}
        </div>
    );
}

export default ProjectCards;