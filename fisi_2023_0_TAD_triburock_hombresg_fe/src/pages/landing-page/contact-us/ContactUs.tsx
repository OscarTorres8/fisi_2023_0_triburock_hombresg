import HorizontalNavBar from "../../../components/shared/navigation/public/HorizontalNavBar";
import "../../../layout/Vertical.css"
import "./ContactUs.css"
import ContactUsContent from "../../../components/landing-page/contact-us/ContactUsContent";

export default function ContactUs() {
    return (
        <div id={"layout"} className={"vertical contact-us"}>
            <HorizontalNavBar/>
            <ContactUsContent/>
        </div>
    )
}
