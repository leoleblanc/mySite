import ProjectCard from "./ProjectCard";

import { Projects } from "@/projectInfo/projectTypes";

const ProjectCards = (props: Projects) => {
    const projects = Object.values(props).map((projectDetails) => {
        return <ProjectCard key={projectDetails.projectName}  {...projectDetails} />
    })

    return (
        <div className={`flex flex-row width-full gap-sm flex-justify-center flex-align-center`}>
            {projects}
        </div>
    );
}

export default ProjectCards;