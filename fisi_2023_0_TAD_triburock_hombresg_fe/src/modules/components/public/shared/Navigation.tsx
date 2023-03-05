import "./Navigation.css"
import {NavLink} from "react-router-dom";
import Logo from "../../shared/Logo";
import "./../../shared/Button.css"

export default function Navigation() {
    const menus = {
        'Home': '/',
        'Plans': '/plans',
        'Contact': '/contact'
    }
    const navLinkStyle = (props: { isActive: boolean }) => props.isActive ? "navigation--menu-active" : "navigation--menu-inactive"

    return <nav className="navigation">
        <Logo/>
        <ul className="navigation--menus">
            {
                Object.entries(menus)
                    .map(([name, path]) =>
                        <li className="navigation--menu--item" key={name}>
                            <NavLink to={path} className={navLinkStyle}>{name}</NavLink>
                        </li>)
            }
        </ul>
        <NavLink to='/intranet' className="button">Intranet</NavLink>
    </nav>
}
