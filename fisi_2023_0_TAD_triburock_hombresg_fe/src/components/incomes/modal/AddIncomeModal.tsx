import "../../modals/Modal.css"
import Button, {Styles} from "../../shared/button/Button";
import {Theme} from "../../../common/Theme";
import {MouseEventHandler, useRef, useState} from "react";
import InputRef from "../../shared/textfield/InputRef";
import PlanResponse from "../../../fetching/get/res/PlanResponse";
import "./AddIncomeModal.css"
import {Plan} from "./Plan";
import onPostIncome from "../../../fetching/post/action/onPostIncome";
import {IncomeType} from "../../../fetching/shared/IncomeType";
import ClientResponse from "../../../fetching/get/res/ClientResponse";
import formattedDate from "../../../utils/FormattedDate";

type Props = {
    onCancel: MouseEventHandler<HTMLButtonElement>,
    plans: PlanResponse[],
    clients: ClientResponse[]
}

export default function AddIncomeModal({onCancel, plans, clients}: Props) {
    const dniRef = useRef<HTMLInputElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div id={"modal"}>
            <div id={"container"}>
                <div id={"form"}>
                    <span>Agregar ingreso</span>
                    <InputRef name={"DNI"} icon={'alternate_email'} theme={Theme.Light} input={
                        () => <input placeholder={"Ingrese el DNI del cliente"} ref={dniRef} type={'text'}/>
                    }/>
                    <div id={"plans"}>
                        {
                            plans.map((plan, index) => <Plan plan={plan} key={index} planIndex={index}
                                                             selectedIndex={selectedIndex}
                                                             setSelectedIndex={setSelectedIndex}/>)
                        }
                    </div>
                    <div id={"options"}>
                        <Button name={"Cancelar"} icon={'close'} style={Styles.Outline} theme={Theme.Dark}
                                onClick={onCancel}/>
                        <Button name={"Registar"} icon={'send'} style={Styles.Filled} theme={Theme.Secondary}
                                onClick={() => {
                                    const now = new Date();
                                    now.setTime(now.getTime() - now.getTimezoneOffset() * 60 * 1000)
                                    onPostIncome({
                                        TipoIngreso: IncomeType.Plans,
                                        UsuarioId: 14,
                                        ClienteId: clients.filter(({DNI}) => DNI === dniRef?.current?.value).map(({ClienteId}) => ClienteId)[0] || -1,
                                        MontoTotal: parseInt(plans[selectedIndex].Precio) || 0,
                                        Fecha: formattedDate(now),
                                    }).then((res) => console.log(res))
                                }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
