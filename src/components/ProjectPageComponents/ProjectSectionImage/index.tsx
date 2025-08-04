import CustomImage from "@/components/CustomImage";
import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionImageProps {
    image: string,
    altName: string,
    width?: number,
    aspectRatio?: number,
    spacing?: number
}

const ProjectSectionImage = ({ image, altName, width = 100, aspectRatio = 1, spacing = 0 }: ProjectSectionImageProps) => {
    return (
        <div className={`width-full center`}>
            <div style={{ width: `${width}%`, aspectRatio }} key={image}>
                <CustomImage
                    src={image}
                    alt={altName}
                    style={{ objectFit: 'contain' }}
                    fill
                />
            </div>
            <BlankSpace space={spacing} />
        </div>
    )
}

export default ProjectSectionImage