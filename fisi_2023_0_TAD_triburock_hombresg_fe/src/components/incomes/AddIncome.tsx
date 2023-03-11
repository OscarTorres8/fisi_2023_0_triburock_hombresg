import Button, {Styles} from "../shared/button/Button";
import {Theme} from "../../common/Theme";
import {useState} from "react";
import "../modals/buttonAddContainer.css"
import AddIncomeModal from "./modal/AddIncomeModal";
import PlanResponse from "../../fetching/get/res/PlanResponse";
import ClientResponse from "../../fetching/get/res/ClientResponse";

type Props = {
    plans: PlanResponse[],
    clients: ClientResponse[]
}

export default function AddIncome({plans, clients}: Props) {
    const [showModal, setShowModal] = useState(false)
    return (
        <div id={"add-container"}>
            <Button
                name={"Agregar"}
                icon={"add"}
                style={Styles.Outline}
                theme={Theme.Light}
                onClick={() => setShowModal(true)}/>
            {
                showModal && <AddIncomeModal onCancel={() => setShowModal(false)} plans={plans} clients={clients}/>
            }
        </div>
    )
}
