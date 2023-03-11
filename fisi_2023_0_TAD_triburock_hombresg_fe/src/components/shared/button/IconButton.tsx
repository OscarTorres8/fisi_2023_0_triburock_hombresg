import {Theme} from "../../../common/Theme";
import "./Button.css"
import "./variants/OutlineLight.css"
import "./variants/Filled.css"
import {MouseEventHandler} from "react";
import {Styles} from "./Button";

type Props = {
    icon: string,
    style: Styles,
    theme: Theme,
    onClick: MouseEventHandler<HTMLButtonElement>,
    disable? : boolean
}

export default function IconButton({icon, style, theme, onClick, disable = false}: Props) {
    return (
        <button className={`icon button ${style} ${theme}`} type='button' onClick={onClick} disabled={disable}>
            <span className="material-symbols-outlined">{icon}</span>
        </button>
    )
}
