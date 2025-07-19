import styles from './projectPageStyles.module.sass'
import BlankSpace from "@/components/BlankSpace";
import CustomImage from "@/components/CustomImage";
import { Project, PROJECT_OBJECTS, TProjectItem } from "@/projectInfo/projectTypes";
import { PROJECT_LIST } from "@/projectInfo/projects";

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
    return details.map((projectItem, index) => {
        // const key = Object.keys(projectItem)[0]
        const [key, value] = Object.entries(projectItem)[0]

        let content;

        switch (key) {
            case PROJECT_OBJECTS.TITLE:
                content = (
                    <div className={`text-lg bold`}>
                        {value}
                        <BlankSpace space={.25} />
                    </div>
                );
                break;
            case PROJECT_OBJECTS.SUBTITLE:
                content = (
                    <div className={`text-slightly-lg bold`}>
                        {value}
                        <BlankSpace space={.25} />
                    </div>
                );
                break;
            case PROJECT_OBJECTS.TEXT:
                content = (
                    <div className={`text-left text-space`}>
                        {value}
                        <BlankSpace space={.5} />
                    </div>
                );
                break;
            case PROJECT_OBJECTS.IMAGE:
                content = <div>an image</div>
                break;
            case PROJECT_OBJECTS.IMAGETEXT:
                content = (
                    <div className={`text-sm faint`}>
                        {value}
                        <BlankSpace space={.5} />
                    </div>
                );
                break;
            default:
                console.log('/projects/[projectName]: unknown object passed in to be rendered: ' + JSON.stringify({ key: value }))
                return

        }

        return (
            <div key={index} className={'flex flex-justify-center'}>
                <div className={'width-restrict'}>
                    {content}
                </div>
            </div>);
    })
}

export default async function Page({ params }: {
    params: Promise<{ projectName: string }>
}) {
    const projectName = (await params).projectName;

    const projectDetails: Project = getProjectDetailsFromName(projectName);

    return <div className={styles.mainContent}>
        <div className={"text-xlg bold"}>
            {projectDetails.projectName}
        </div>
        <BlankSpace space={1} />
        <div className={"text-slight-lg italic"}>
            {projectDetails.projectSubtitle}
        </div>
        <BlankSpace space={1} />
        {renderImage(projectDetails.image, projectDetails.projectName)}
        {projectDetails.imageSubtitle ?
            <div className={"text-slight-sm faint"}>
                <BlankSpace space={.25} />
                {projectDetails.imageSubtitle}
            </div> : null
        }
        <BlankSpace space={1.5} />
        {/* <div className={'width-restrict'}> */}
        {renderProjectDetails(projectDetails.projectInfo)}
        {/* </div> */}

    </div>

}