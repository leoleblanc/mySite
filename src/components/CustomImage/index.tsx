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
        <div className={styles.relative}>
            <Image
                {...rest}
                src={src}
                alt={alt || ""}
                width={width}
                height={height}
                className={`${props.className} ${circular ? styles.circular : ''}`}
            />
        </div>
    );
}

export default CustomImage