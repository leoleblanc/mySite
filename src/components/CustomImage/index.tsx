import Image, { ImageProps } from "next/image";

const CustomImage = (props: ImageProps) => {
    const { src, alt, width, height, ...rest } = props;

    // TODO: something about this checking is messed up
    // const imageSrc = typeof src === "string" ? src : "";

    return (
        <Image
            src={src}
            alt={alt || ""}
            width={width}
            height={height}
            {...rest}
        />
    );
}

export default CustomImage