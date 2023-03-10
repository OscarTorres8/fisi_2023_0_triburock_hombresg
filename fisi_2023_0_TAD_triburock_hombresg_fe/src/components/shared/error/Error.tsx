import "./Error.css"

export default function Error({message}: { message: string }) {
    return (
        <div id="error">
            <img src={"https://cdn-icons-png.flaticon.com/512/3306/3306642.png"} alt={""}/>
            <span>{message}</span>
        </div>
    )
}
