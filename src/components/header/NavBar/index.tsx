'use client';

import { HEADER } from "@/global/constants";
import { HEADER_ELEMENT } from "@/global/types";
import { ReactNode } from "react";
import NavElement from "./NavElement";

const NavBar = (): ReactNode => {
    const elements = Object.values(HEADER).map((element: HEADER_ELEMENT, index: number) => {
        return <NavElement {...element} isFirst={index === 0} key={`${element.name + 'nav'}`} />;
    });
    return (
        <div>
            {elements}
        </div>
    )
}

export default NavBar;