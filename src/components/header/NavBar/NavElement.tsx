'use client';

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElementStyles.module.sass';
import React from "react";
import Image from 'next/image'

interface NavElementProps extends HEADER_ELEMENT {
    isFirst: boolean;
}

const NavElement = (props: NavElementProps) => {
    const { name, path, isFirst, icon } = props;

    let clickable: React.ReactNode = name;

    if (icon) {
        const { path, width, height } = icon;
        clickable =
            <Image src={path}
                height={height}
                width={width}
                alt={name}
            />
    }

    return (
        <span key={name} className={`${styles.navElement} ${isFirst ? styles.noPadding : ''}`}>
            <a className={styles.flex} href={path}>{clickable}</a>
        </span>
    )
}

export default NavElement;