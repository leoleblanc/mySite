'use client';

import { useRouter } from "next/navigation";

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElementStyles.module.sass';
import React from "react";
import CustomImage from "@/components/CustomImage";

interface NavElementProps extends HEADER_ELEMENT {
    isFirst: boolean;
}

const NavElement = (props: NavElementProps) => {
    const router = useRouter();

    const { name, path, isFirst, icon } = props;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        event.preventDefault();
        router.push(path);
    }

    let clickable: React.ReactNode = name;

    if (icon) {
        // TODO: remove duplicates when theming is fixed
        // because honestly... this feels beyond janky
        const { width, height, lightModePath, darkModePath } = icon;
        clickable = [
            <CustomImage
                src={darkModePath}
                key={`${name}-dark`}
                className={styles.iconDarkTheme}
                height={height}
                width={width}
                alt={name}
            />,
            <CustomImage
                src={lightModePath}
                key={`${name}-light`}
                className={styles.iconLightTheme}
                height={height}
                width={width}
                alt={name} />
        ]
    }

    return (
        <span key={name} className={`${styles.navElement} ${isFirst ? styles.noPadding : ''}`}>
            <a className={styles.flex} onClick={handleClick}>{clickable}</a>
        </span>
    )
}

export default NavElement;