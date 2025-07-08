import { PROJECTS } from "@/global/types";
import ProjectCard from "./ProjectCard";
import styles from './ProjectCards.module.sass';

const ProjectCards = (props: PROJECTS) => {
    const projects = Object.values(props).map((projectDetails) => {
        if (projectDetails.hide) {
            return null;
        }

        return <ProjectCard key={projectDetails.name}  {...projectDetails} />
    })

    return (
        <div className={styles.projectCardsContainer}>
            {projects}
        </div>
    );
}

export default ProjectCards;