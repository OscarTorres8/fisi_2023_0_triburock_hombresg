import "./VerticalNavBar.css"
import "./Links.css"
import "./Link.css"

import Brand from "../../brand/Brand";
import {RedirectTo} from "../../button/RedirectTo";
import {Styles} from "../../button/Button";
import {Theme} from "../../../../common/Theme";
import {NavLink} from "react-router-dom";
import AdminLink from "../../../../common/AdminLink";

type Props = {
    user: string,
    links: AdminLink[],
    onLogout?: () => void
}

export default function VerticalNavBar({user, links = [], onLogout}: Props) {
    return (
        <div id="nav-var" className="vertical">
            <Brand/>
            <span>{user}</span>
            <ul id="links" className="vertical">
                {
                    links.map(({name, path, icon}) =>
                        <li key={name}>
                            <NavLink to={path} className={({isActive}) => isActive ? "link active" : "link"}>
                                <span className="material-symbols-outlined">{icon}</span>
                                <span>{name}</span>
                            </NavLink>
                        </li>
                    )
                }
            </ul>
            <RedirectTo
                name={"Logout"}
                icon={"logout"}
                style={Styles.Outline}
                theme={Theme.Light}
                path={"/login"}
                onClick={onLogout}
            />
        </div>
    )
}
