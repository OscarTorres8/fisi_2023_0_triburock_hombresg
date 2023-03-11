import PlanResponse from "../../../fetching/get/res/PlanResponse";
import "./Plan.css"
import {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import Feature from "./Feature";
import Toggle from "../../shared/button/Toggle";
import {Dispatch} from "react";

type Props = {
    plan: PlanResponse,
    planIndex: number,
    selectedIndex: number
    setSelectedIndex: Dispatch<number>
}

export function Plan({plan: {Nombre, Precio, Duracion}, planIndex, selectedIndex, setSelectedIndex}: Props) {
    const features = Array(4).fill("Lorem ipsum")
    return (
        <div className={"plan"}>
            <span className={"title"}>{Nombre}</span>
            <div className={"price"}>
                <span className={"value"}>{Precio}</span>
                <span className={"period"}>/Cada {Duracion} {Duracion === 1 ? "Mes" : "Meses"}</span>
            </div>
            {
                features.map((feature, index) => (
                    <Feature name={feature} highlighted={index <= planIndex} key={index}/>
                ))
            }
            <Toggle name={"Seleccionar"} icon={'favorite'} style={Styles.Outline} theme={Theme.Dark}
                    onClick={() => {
                        if (selectedIndex === planIndex) {
                            setSelectedIndex(-1)
                        }else{
                            setSelectedIndex(planIndex)
                        }
                    }}
                    selected={planIndex === selectedIndex}
            />
        </div>
    )
}
