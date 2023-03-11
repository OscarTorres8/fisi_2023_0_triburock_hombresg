import "./Feature.css"
export default function Feature({name, icon}: { name: string, icon: string }) {
    return (
        <div id={"feature"}>
            <span>{name}</span>
            <div>
                <img className={icon} alt={""}/>
            </div>
        </div>
    )
}
