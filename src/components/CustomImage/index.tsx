import Image, { ImageProps } from "next/image";
import styles from './CustomImageStyles.module.sass';

interface CustomImageProps extends ImageProps {
    circular?: boolean;
}

const CustomImage = (props: CustomImageProps) => {
    const { src, alt, width, height, circular, ...rest } = props;

    // TODO: something about this checking is messed up
    // const imageSrc = typeof src === "string" ? src : "";

    return (
        <Image
            src={src}
            alt={alt || ""}
            width={width}
            height={height}
            className={`${props.className} ${styles.circular}`}
            {...rest}
        />
    );
}

export default CustomImage