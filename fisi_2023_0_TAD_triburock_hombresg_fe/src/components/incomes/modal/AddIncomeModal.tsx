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
import Loading from "../../shared/loading/Loading";
import Error from "../../shared/error/Error";
import Success from "../../shared/success/Success";

type Props = {
    onCancel: MouseEventHandler<HTMLButtonElement>,
    plans: PlanResponse[],
    clients: ClientResponse[]
}

export default function AddIncomeModal({onCancel, plans, clients}: Props) {
    const dniRef = useRef<HTMLInputElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

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

                                    if ((dniRef?.current?.value.length) === 0){
                                        setSuccess("")
                                        setError("DNI vacío")
                                        return;
                                    }

                                    if (dniRef?.current?.value.length !== 8) {
                                        setSuccess("")
                                        setError("El DNI debe tener 8 dígitos")
                                        return;
                                    }

                                    if (selectedIndex < 0) {
                                        setSuccess("")
                                        setError("Seleccione un plan")
                                        return
                                    }


                                    const now = new Date();
                                    now.setTime(now.getTime() - now.getTimezoneOffset() * 60 * 1000)
                                    onPostIncome({
                                        TipoIngreso: IncomeType.Plans,
                                        UsuarioId: 14,
                                        ClienteId: clients.filter(({DNI}) => DNI === dniRef?.current?.value).map(({ClienteId}) => ClienteId)[0] || -1,
                                        MontoTotal: parseInt(plans[selectedIndex]?.Precio) || 0,
                                        Fecha: formattedDate(now),
                                    }).then((res) => {
                                        setLoading(true)
                                        if (res.ok) {
                                            setSuccess('Ingreso añadido')
                                            setError("")
                                            return null
                                        } else {
                                            setSuccess("")
                                            res.json().then((data) => setError(data.toString()))
                                        }
                                    }).catch((err) => {
                                        setError(err)
                                    }).finally(() => setLoading(false))
                                }}/>
                    </div>
                    <div id={"results"}>
                        {loading && <Loading name={"Registrando"}/>}
                        {error && <Error message={error}/>}
                        {success && <Success message={success}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
