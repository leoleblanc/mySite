'use client';

import { HEADER_ELEMENT } from "@/global/types"
import styles from './NavElement.module.sass';

interface NavElementProps extends HEADER_ELEMENT {
    isFirst: boolean;
}

const NavElement = (props: NavElementProps) => {
    // TODO: use icon where appropriate
    const { name, path, icon, isFirst } = props;
    return (
        <span key={name} className={`${styles.navElement} ${isFirst ? styles.noPadding : ''}`}>
            <a href={path}>{name}</a>
        </span>
    )
}

export default NavElement;