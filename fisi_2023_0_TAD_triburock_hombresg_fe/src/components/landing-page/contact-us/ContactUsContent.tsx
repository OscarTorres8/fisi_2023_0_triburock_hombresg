import Button, {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import "./ContactUsContent.css"
import {RedirectTo} from "../../shared/button/RedirectTo";

export default function ContactUsContent() {
    return (
        <div id={"container"}>
            <div id={"find-us"}>
                <div>
                    <span className={"find-us-title"}>Encuéntranos</span>
                    <span className={"description"}>Los Olivos, Cercado de Lima 15494</span>
                    <RedirectTo
                        name={"Abrir Maps"}
                        style={Styles.Outline}
                        theme={Theme.Dark}
                        icon="near_me"
                        path={"https://www.google.com/maps/place/12%C2%B002'02.3%22S+76%C2%B055'34.4%22W/@-12.033983,-76.926218,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4f8e7e0798d2c4ff!8m2!3d-12.033983!4d-76.926218"}/>
                </div>
                <div className={"pic"}/>
            </div>
        </div>
    )
}
