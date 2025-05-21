'use client';

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElementStyles.module.sass';

interface NavElementProps extends HEADER_ELEMENT {
    isFirst: boolean;
}

const NavElement = (props: NavElementProps) => {
    // TODO: use icon where appropriate, extract from props
    const { name, path, isFirst } = props;

    return (
        <span key={name} className={`${styles.navElement} ${isFirst ? styles.noPadding : ''}`}>
            <a href={path}>{name}</a>
        </span>
    )
}

export default NavElement;