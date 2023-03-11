import Button, {Styles} from "../shared/button/Button";
import {Theme} from "../../common/Theme";
import {useState} from "react";
import AddClientModal from "./modal/AddClientModal";

export default function AddClient() {
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
                showModal && <AddClientModal onCancel={() => setShowModal(false)}/>
            }
        </div>
    )
}
