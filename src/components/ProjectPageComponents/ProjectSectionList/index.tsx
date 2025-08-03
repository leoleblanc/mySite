import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionList {
    items: string[],
    ordered?: boolean,
    spacing?: number
}

const ProjectSectionList = ({ items, ordered = false, spacing = .5 }: ProjectSectionList) => {
    if (!Array.isArray(items)) {
        console.log(`ProjectSectionList - items classified as list but is not array: `, items);
    }

    const listContent: React.ReactElement[] = [];
    items.map((contentItem, index) => {
        listContent.push(
            <li key={index} style={{ listStylePosition: 'inside' }}>{contentItem}</li>
        )
    })


    const ListTag = ordered ? 'ol' : 'ul';

    return (
        <ListTag className={`text-left text-space padding-sm-horizontal`}>
            {listContent}
            {<BlankSpace space={spacing} />}
        </ListTag>
    )
}

export default ProjectSectionList