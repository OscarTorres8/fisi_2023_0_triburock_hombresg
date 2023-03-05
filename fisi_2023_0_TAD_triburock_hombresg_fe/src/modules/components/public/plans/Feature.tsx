import "./styles/Plan.css"

export default function Feature({name, type}: { name: string, type: string | null }) {
    const styles = {
        "gold": "plans--content--item--feature--gold",
        "purple": "plans--content--item--feature--purple",
    }
    let style: string
    switch (type) {
        case "gold" :
            style = "plans--content--item--feature--gold"
            break;
        case "purple" :
            style = "plans--content--item--feature--purple"
            break;
        default:
            style = "plans--content--item--feature"

    }

    return (
        <div className={style}>
            <p>{name}</p>
        </div>
    )
}
