import "./Loading.css"

type Props = {
    name: string,
    light?: boolean
}

export default function Loading({name, light = true}: Props) {
    return (
        <div id="loading">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>{name}</span>
        </div>
    )
}
