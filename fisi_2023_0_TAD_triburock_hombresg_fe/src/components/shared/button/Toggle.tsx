import {Theme} from "../../../common/Theme";
import "./Button.css"
import "./variants/OutlineLight.css"
import "./variants/OutlineDark.css"
import "./variants/Filled.css"
import {MouseEventHandler} from "react";
import "./Toggle.css"
import {Styles} from "./Button";

type Props = {
    name: string,
    icon?: string,
    style: Styles,
    theme: Theme,
    onClick: MouseEventHandler<HTMLButtonElement>,
    disable?: boolean,
    selected: boolean
}

export default function Toggle({name, icon = '', style, theme, onClick, disable = false, selected}: Props) {
    return (
        <button className={selected ? `selected button ${style} ${theme}` : `button ${style} ${theme}`} type='button'
                onClick={onClick} disabled={disable}>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {name && <span>{name}</span>}
        </button>
    )
}
