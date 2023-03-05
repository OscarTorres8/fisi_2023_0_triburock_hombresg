import Content from "../../components/public/home/Content";
import Navigation from "../../components/public/shared/Navigation";
import "./styles/Home.css"

export default function Home() {
    return (
        <div className="home">
            <Navigation/>
            <Content/>
        </div>
    )
}
