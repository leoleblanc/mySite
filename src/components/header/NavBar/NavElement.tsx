'use client';

import Link from "next/link";

import React from "react";

import { HEADER_ELEMENT } from "@/global/types"
import { PROJECT_LIST } from "@/projectInfo/projects";

import CustomImage from "@/components/CustomImage";

import styles from './NavElementStyles.module.sass';
import { urlifiedString } from "@/utilities";

const handleDropdownClick = (elementIdsToDisable: string[]) => {
    // TODO: fix for mobile, as the dropdown is still visible
    for (const id of elementIdsToDisable) {
        const elementToDisable = document.getElementById(id) as HTMLElement;

        const currentPointerEvent = elementToDisable.style.pointerEvents;

        elementToDisable.style.pointerEvents = 'none'

        setTimeout(() => {
            elementToDisable.style.pointerEvents = currentPointerEvent;
        }, 1000)
    }
}

const NavElement = (props: HEADER_ELEMENT) => {
    const { name, path, icon } = props;

    let clickable: React.ReactNode = name;

    if (icon) {
        const { iconPath, darkModeWhiten } = icon;
        clickable =
            <div className={`aspect-one ${styles.navIcon}`}>
                <CustomImage
                    src={iconPath}
                    key={name}
                    style={{ objectFit: 'contain' }}
                    className={`flex ${darkModeWhiten ? styles.whiten : styles.invert}`}
                    fill
                    alt={name} />
            </div>

        return (
            <Link key={name} className={`${styles.navPadding} ${styles.navOpacity}`} href={path}>
                {clickable}
            </Link>
        )
    }

    let elementToRender = <Link className={`bold ${styles.navPadding} ${styles.navOpacity}`} href={path}>{clickable}</Link>;
    if (name === 'Projects') {
        const projects = []

        for (const project of Object.keys(PROJECT_LIST)) {
            if (!!PROJECT_LIST[project].preview) {
                continue;
            }

            const projectName = PROJECT_LIST[project].projectName
            const redirectUrl = `/projects/` + urlifiedString(projectName)

            projects.push(
                <Link key={'navbar' + projectName} href={redirectUrl} className={`${styles.navOpacity} ${styles.dropdownItem}`} onClick={() => handleDropdownClick(['dropdown', 'dropdownInitiator'])}>
                    {projectName}
                </Link>
            )
        }

        elementToRender = (
            <div className={'relative'}>
                <div id="dropdownInitiator" className={`bold ${styles.dropdownInitiator} ${styles.navPadding} ${styles.navOpacity}`}>
                    {clickable}
                    <span className={`text-sm relative ${styles.dropdownIndicator}`} />
                </div>
                <div id="dropdown" className={`text-slight-sm theme-background-header background-blur ${styles.dropdown}`}>
                    {projects}
                </div>
            </div>
        )

    }
    return (
        <span key={name} className={styles.navPadding}>
            {elementToRender}
        </span>
    )
}

export default NavElement;