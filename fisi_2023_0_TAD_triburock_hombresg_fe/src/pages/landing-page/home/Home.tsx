import HorizontalNavBar from "../../../components/shared/navigation/public/HorizontalNavBar";
import Slogan from "../../../components/landing-page/home/Slogan";
import "../../../layout/Vertical.css"
import "./Home.css"
import Benefits from "../../../components/landing-page/home/Benefits";

export default function Home() {
    return (
        <div id={"layout"} className={"vertical home"}>
            <HorizontalNavBar/>
            <Slogan/>
            <Benefits/>
        </div>
    )
}
