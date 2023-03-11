import Brand from "../../brand/Brand";
import {links} from "../../../../common/PublicLink";
import Link from "./Link";
import {RedirectTo} from "../../button/RedirectTo";
import {Styles} from "../../button/Button";
import {Theme} from "../../../../common/Theme";
import "./HorizontalNavBar.css"

export default function HorizontalNavBar() {
    return (
        <nav id={"nav-bar"} className={"horizontal"}>
            <Brand/>
            <ul id={"menu"}>
                {
                    links.map((link, index) => <Link link={link} key={index}/>)
                }
            </ul>
            <RedirectTo name={'Intranet'} icon={'login'} style={Styles.Outline} theme={Theme.Light} path={'/login'}/>
        </nav>
    )
}
