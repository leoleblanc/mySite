'use client';

import {HEADER} from "@/global/constants";
import { HEADER_ELEMENT } from "@/global/types";
import { ReactNode } from "react";
import NavElement from "./NavElement";

const NavBar = (): ReactNode => {
    const elements = Object.values(HEADER).map((element: HEADER_ELEMENT) => {
        return <NavElement {...element}/>;
    });
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                {elements}
            </div>
        </div>
    )
}

export default NavBar;