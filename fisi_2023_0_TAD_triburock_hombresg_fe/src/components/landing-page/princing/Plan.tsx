import PricingPlan from "./config/PricingPlan";
import "./Plan.css"
import Button, {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import Feature from "./Feature";

export default function Plan({pricing: {plan, features, border}}: { pricing: PricingPlan }) {
    return (
        <div className={`pricing-plan ${border}`}>
            <div className={"title"}>
                <span>{plan.Nombre}</span>
                <div>
                    <span className={"price"}>${plan.Precio}</span>
                    <span className={"duration"}>/por {plan.Duracion} {plan.Duracion === 1 ? "Mes" : "Meses"}</span>
                </div>
            </div>
            {
                features.map((feature, index) => <Feature feature={feature} key={index}/>)
            }
            <Button
                name={'Subscríbete'}
                icon={'favorite'}
                style={Styles.Outline}
                theme={Theme.Light}
                onClick={() => {
                }}/>
        </div>
    )
}
