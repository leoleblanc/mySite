import { HEADER } from "@/global/constants";
import { HEADER_ELEMENT } from "@/global/types";
import { ReactNode } from "react";
import NavElement from "./NavElement";
import styles from './NavBarStyles.module.sass'

const NavBar = (): ReactNode => {
    const elements = Object.values(HEADER).map((element: HEADER_ELEMENT) => {
        return <NavElement {...element} key={`${element.name + 'nav'}`} />;
    });

    return (
        <div className={styles.verticalCenter}>
            {elements}
        </div>
    )
}

export default NavBar;