import { HEADER_ELEMENT } from "@/global/types"



const NavElement = (props: HEADER_ELEMENT) => {
    // TODO: use icon where appropriate
    const {name, path, icon} = props;
    return (
    <span key={name} className="flex flex-col">
                     <a href={path}>{name}</a>
                 </span>
    )
}

export default NavElement;