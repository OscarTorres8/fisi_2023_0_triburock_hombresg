import Feature from "./Feature";
import "./Benefits.css"

export default function Benefits() {
    const features = [
        {
            name: "Vida cotidiana saludable",
            icon: 'cardiology'
        },
        {
            name: 'Lugares por descubrir',
            icon: 'near_me'
        },
        {
            name: 'Motivación',
            icon: 'trending_up'
        }
    ]

    return (
        <div id={"benefits"}>
            <div id={"features"}>
                {
                    features.map(({icon, name}, index) => <Feature name={name} icon={icon} key={index}/>)
                }
            </div>
            <div id={"title"}>
                <span>Los mejores</span>
                <span> valores </span>
                <span> para ti</span>
            </div>
        </div>
    )
}
