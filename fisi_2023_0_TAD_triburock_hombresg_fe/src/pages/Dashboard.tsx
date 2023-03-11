import "../layout/Horizontal.css"
import VerticalNavBar from "../components/shared/navigation/admin/VerticalNavBar";
import {links} from "../common/AdminLink";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Dashboard({name, onLogout}: Props) {
    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <div id="content">
                Content
            </div>
        </div>
    )
}
