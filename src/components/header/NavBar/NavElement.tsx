'use client';

import { useRouter } from "next/navigation";

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElementStyles.module.sass';
import React from "react";
import CustomImage from "@/components/CustomImage";

const NavElement = (props: HEADER_ELEMENT) => {
    const router = useRouter();

    const { name, path, icon } = props;

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
        <span key={name} className={`${styles.navElement}`}>
            <a className={`bold ${styles.flex}`} onClick={handleClick}>{clickable}</a>
        </span>
    )
}

export default NavElement;