import Header from "./Header";
import "./styles/Content.css"
import "./../../shared/Button.css"
import {NavLink} from "react-router-dom";

export default function Content() {
    return <div className="home-content">
        <Header/>
        <NavLink to='/intranet' className="button--gradient">Start now</NavLink>
    </div>
}
