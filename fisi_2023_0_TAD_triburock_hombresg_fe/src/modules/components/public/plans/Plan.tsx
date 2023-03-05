import Feature from "./Feature";
import "./styles/Plan.css"

export default function Plan({
                                 name,
                                 price,
                                 features
                             }: { name: string, price: number, features: { name: string, type: string | null }[] }) {

    const style = name === "Gold" ? "plans--content--item--details--title--gold" : "plans--content--item--details--title"

    return (
        <div className="plans--content--item">
            <div className="plans--content--item--details">
                <p className={style}>{name}</p>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <p className="plans--content--item--details--price">${price}</p>
                    <p className="plans--content--item--details--period">/per month</p>
                </div>
                {
                    features.map(({name, type}) => <Feature name={name} type={type}/>)
                }
            </div>
            {
            }
        </div>
    )
}
