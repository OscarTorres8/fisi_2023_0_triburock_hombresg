import PublicLink from "../../../../common/PublicLink";
import {NavLink} from "react-router-dom";
import "./Link.css"
export default function Link({link}: { link: PublicLink }) {
    return (
        <li>
            <NavLink to={link.path} className={({isActive}) => isActive ? "link active" : "link"}>{link.name}</NavLink>
        </li>
    )
}
