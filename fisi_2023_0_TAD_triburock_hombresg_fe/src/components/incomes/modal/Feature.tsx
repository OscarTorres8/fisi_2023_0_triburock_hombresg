import "./Feature.css"

type Props = {
    name: string,
    highlighted?: boolean
}

export default function Feature({name, highlighted = false}: Props) {
    return (
        <div className={highlighted ? "feature highlighted" : "feature"}>
            <span className={highlighted ? "material-symbols-outlined icon highlighted" : "material-symbols-outlined icon"}>check</span>
            <span className={"name"}>{name}</span>
        </div>
    )
}
