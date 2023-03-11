import "./Success.css"

export default function Success({message}: { message: string }) {
    return (
        <div id="success">
            <img src={"https://cdn-icons-png.flaticon.com/512/9068/9068676.png"} alt={""}/>
            <span>{message}</span>
        </div>
    )
}
