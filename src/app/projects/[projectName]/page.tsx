import styles from './projectPageStyles.module.sass'
import BlankSpace from "@/components/BlankSpace";
import CustomImage from "@/components/CustomImage";
import { Project, PROJECT_OBJECTS, TProjectItem } from "@/projectInfo/projectTypes";
import { PROJECT_LIST } from "@/projectInfo/projects";
import ThemedBox from '@/components/ThemedBox';
import React from 'react';
import ProjectSectionTitle from '@/components/ProjectPageComponents/ProjectSectionTitle';
import ProjectSectionSubtitle from '@/components/ProjectPageComponents/ProjectSectionSubtitle';
import ProjectSectionText from '@/components/ProjectPageComponents/ProjectSectionText';
import ProjectSectionList from '@/components/ProjectPageComponents/ProjectSectionList';
import ProjectSectionFootnote from '@/components/ProjectPageComponents/ProjectSectionFootnote';
import ProjectCards from '@/components/ProjectCards';
import ProjectSectionTags from '@/components/ProjectPageComponents/ProjectSectionTags';

const getProjectDetailsFromName = (urlName: string): Project => {
    // TODO: Eventually, this should be linked to a CMS. For now, a local file will do.
    const nameWithoutDashes = urlName.replace(/-/g, '');

    const indexName = nameWithoutDashes.toUpperCase();

    return PROJECT_LIST[indexName] || null;
}

const renderImage = (image: string, altName: string) => {
    return (
        <div className={styles.imageInnerContainer} key={image}>
            <CustomImage
                src={image}
                alt={altName}
                style={{ objectFit: 'contain' }}
                fill
            />
        </div>
    )
}

const renderProjectDetails = (details: TProjectItem[]) => {

    const allDetails: React.ReactElement[] = []
    details.map((projectItem, index) => {
        const [key, value] = Object.entries(projectItem)[0]

        const objectContent = value.objectContent;

        const spacing = value.spacing;

        const addToDetails = ((objectToPush: React.ReactElement) => allDetails.push(objectToPush))

        switch (key) {
            case PROJECT_OBJECTS.TITLE:
                addToDetails(<ProjectSectionTitle key={index} title={objectContent as string} spacing={spacing} />)
                break;
            case PROJECT_OBJECTS.SUBTITLE:
                addToDetails(<ProjectSectionSubtitle key={index} subtitle={objectContent as string} spacing={spacing} />)
                break;
            case PROJECT_OBJECTS.TEXT:
                addToDetails(<ProjectSectionText key={index} text={objectContent as string} spacing={spacing} />);
                break;
            case PROJECT_OBJECTS.FOOTNOTE:
                addToDetails(<ProjectSectionFootnote key={index} footnote={objectContent as string} spacing={spacing} />);
                break;
            case PROJECT_OBJECTS.LIST_BULLETED:
                addToDetails(<ProjectSectionList key={index} items={objectContent as string[]} spacing={spacing} />)
                break;
            case PROJECT_OBJECTS.LIST_NUMBERED:
                addToDetails(<ProjectSectionList key={index} items={objectContent as string[]} ordered={true} spacing={spacing} />)
                break;
            case PROJECT_OBJECTS.IMAGE:
                // TODO: implement
                addToDetails(<div>an image</div>)
                break;
            case PROJECT_OBJECTS.IMAGETEXT:
                // TODO: implement
                addToDetails(
                    <div className={`text-sm faint`}>
                        {objectContent}
                        <BlankSpace space={.5} />
                    </div>
                );
                break;
            default:
                console.log('/projects/[projectName]: unknown object passed in to be rendered: ' + JSON.stringify({ key: value }))
                return

        }
    })

    return (
        <div className={'flex flex-justify-center'}>
            <ThemedBox>
                {allDetails}
            </ThemedBox>
        </div>
    )
}

const renderOtherProjects = (projectName: string) => {
    const otherProjects = { ...PROJECT_LIST }

    for (const projectKey of Object.keys(PROJECT_LIST)) {
        const projectData = PROJECT_LIST[projectKey];

        if (projectData.projectName === projectName) {
            delete otherProjects[projectKey]
            break;
        }
    }

    return <ProjectCards {...otherProjects} />
}

export default async function Page({ params }: {
    params: Promise<{ projectName: string }>
}) {
    const projectName = (await params).projectName;

    const projectDetails: Project = getProjectDetailsFromName(projectName);

    return <div className={styles.mainContent}>
        <BlankSpace space={1} />
        <div className={"text-xxlg bold"}>
            {projectDetails.projectName}
        </div>
        <BlankSpace space={1} />
        <div className={"text-slight-lg italic"}>
            {projectDetails.projectSubtitle}
        </div>
        <BlankSpace space={1} />
        <ProjectSectionTags tags={projectDetails.projectTags} />
        <BlankSpace space={1} />
        {renderImage(projectDetails.image, projectDetails.projectName)}
        {projectDetails.imageSubtitle ?
            <div className={"text-slight-sm faint"}>
                <BlankSpace space={.25} />
                {projectDetails.imageSubtitle}
            </div> : null
        }
        <BlankSpace space={2.5} />
        {renderProjectDetails(projectDetails.projectInfo)}
        <BlankSpace space={3} />
        <div className={`text-xlg bold`}>Other Projects</div>
        <BlankSpace space={3} />
        {renderOtherProjects(projectDetails.projectName)}
        <BlankSpace space={3} />
    </div>

}