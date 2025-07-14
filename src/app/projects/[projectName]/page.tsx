import { PROJECTS_WORKED_ON } from "@/global/constants";
import { PROJECT } from "@/global/types";

import styles from './projectPageStyles.module.sass'
import BlankSpace from "@/components/BlankSpace";
import CustomImage from "@/components/CustomImage";

const getProjectDetailsFromName = (urlName: string) => {
    const nameWithoutDashes = urlName.replace(/-/g, '');

    const indexName = nameWithoutDashes.toUpperCase();

    return PROJECTS_WORKED_ON[indexName] || null;
}

const renderImages = (images: string[]) => {
    return images.map((image) => {
        return (
            <div className={styles.imageInnerContainer}>
                <CustomImage
                    src={image}
                    alt={"Skillz Image"}
                    fill
                />
            </div>
        )
    })

}

const renderProjectDetails = (details: PROJECT) => {
    const { situation, task, action, result } = details;

    const pageSegments: string[] = [situation || '', task || '', action || '', result || '']

    const projectDetailsContent = pageSegments.map((segment: string, index: number) => {
        let sectionName = ''
        switch (index) {
            case 0:
                sectionName = details.situationTitle || 'SITUATION'
                break;
            case 1:
                sectionName = details.taskTitle || 'TASK'
                break;
            case 2:
                sectionName = details.actionTitle || 'ACTION'
                break;
            case 3:
                sectionName = details.resultTitle || 'RESULT'
                break;
            default:
                sectionName = 'UNDEFINED'
                break;
        }

        return (
            <div >
                <div className={styles.section}>
                    <div className={`heading-large bold ${styles.sectionTitle}`}>
                        {sectionName}
                    </div>
                    <BlankSpace space={.5} />
                    <div className={`heading-small bold ${styles.sectionDetails}`}>
                        {segment}
                    </div>
                </div>
                {index < 3 ? <BlankSpace space={1.5} /> : null}
            </div>
        )
    })

    return (
        <div className={styles.themedBackground}>
            {projectDetailsContent}
        </div>
    )
}

export default async function Page({ params }: {
    params: Promise<{ projectName: string }>
}) {
    const projectName = (await params).projectName;

    const projectDetails: PROJECT = getProjectDetailsFromName(projectName);

    return <div className={styles.mainContent}>
        <div className={"heading-very-large"}>
            {projectDetails.name}
        </div>
        <BlankSpace space={1} />
        <div className={"heading-slightly-large italic"}>
            {projectDetails.briefDescription}
        </div>
        <BlankSpace space={1} />
        <div className={styles.imageOuterContainer}>
            {renderImages(projectDetails.images)}
        </div>
        <BlankSpace space={.25} />
        <div className={"heading-very-small faint"}>
            {projectDetails.imagesDescription}
        </div>
        <BlankSpace space={1.5} />

        {renderProjectDetails(projectDetails)}

    </div>

}