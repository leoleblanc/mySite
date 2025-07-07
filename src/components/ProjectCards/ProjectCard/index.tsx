import { PROJECT } from "@/global/types";
import CustomImage from "@/components/CustomImage";

import styles from './ProjectCard.module.sass';
import BlankSpace from "@/components/BlankSpace";


const ProjectCard = (props: PROJECT) => {
    const { name, icon, briefDescription } = props;

    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardLogoOuterContainer}>
                <div className={styles.projectCardLogoInnerContainer}>
                    <CustomImage
                        src={icon}
                        alt={name}
                        className={styles.projectCardLogo}
                        fill
                    />
                </div>
            </div>
            <BlankSpace space={1} />
            <div className={styles.projectCardTitle}>
                {name}
            </div>
            <div className={styles.projectCardDescription}>
                {briefDescription || "No description provided."}
            </div>
        </div>
    )
}

export default ProjectCard;