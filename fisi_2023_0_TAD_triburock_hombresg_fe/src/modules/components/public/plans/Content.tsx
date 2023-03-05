import Header from "./Header";
import Plan from "./Plan";
import "./styles/Content.css"
import "./styles/Main.css"

export default function Content() {

    const plans = [
        {
            name: 'Basic',
            price: 110,
            features: [
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'purple'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
            ]
        },
        {
            name: 'Gold',
            price: 120,
            features: [
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'gold'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'gold'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
            ]
        },
        {
            name: 'Black',
            price: 150,
            features: [
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'purple'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'purple'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: 'purple'
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    type: null
                },
            ]
        }
    ]

    return (
        <div className="plans--content">
            <Header/>
            <div className="plans--content--main">
                {
                    plans.map(({name, price, features}) => <Plan name={name} price={price} features={features}/>)
                }
            </div>
        </div>
    )
}
