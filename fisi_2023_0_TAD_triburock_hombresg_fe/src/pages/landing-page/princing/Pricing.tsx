import HorizontalNavBar from "../../../components/shared/navigation/public/HorizontalNavBar";
import "../../../layout/Vertical.css"
import "./Pricing.css"
import Title from "../../../components/landing-page/princing/Title";
import Plans from "../../../components/landing-page/princing/Plans";

export default function Pricing() {
    return (
        <div id={"layout"} className={"vertical pricing"}>
            <HorizontalNavBar/>
            <Title/>
            <Plans/>
        </div>
    )
}
