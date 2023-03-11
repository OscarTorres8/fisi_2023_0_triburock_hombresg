import {FeatureType} from "./config/PricingPlan";
import "./Feature.css"

export default function Feature({feature: {color, name}}: { feature: FeatureType }) {
    return (
        <div className={`feature ${color}`}>
            <img alt={""}/>
            <span>{name}</span>
        </div>
    )
}
