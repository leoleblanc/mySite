import Link from "next/link";

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElementStyles.module.sass';
import React from "react";
import CustomImage from "@/components/CustomImage";

const NavElement = (props: HEADER_ELEMENT) => {
    const { name, path, icon } = props;

    let clickable: React.ReactNode = name;

    if (icon) {
        const { path, darkModeWhiten } = icon;
        clickable = <div style={{ height: '1.5ch', aspectRatio: 1 }}>
            <CustomImage
                src={path}
                key={name}
                style={{ objectFit: 'contain' }}
                className={`flex ${darkModeWhiten ? styles.whiten : styles.invert}`}
                fill
                alt={name} />
        </div>
    }

    return (
        <span key={name} className={`${styles.navElement}`}>
            <Link className={`bold`} href={path}>{clickable}</Link>
        </span>
    )
}

export default NavElement;