import {Theme} from "../../../common/Theme";
import "./Button.css"
import "./variants/OutlineLight.css"
import "./variants/OutlineDark.css"
import "./variants/Filled.css"
import {MouseEventHandler} from "react";

type Props = {
    name: string,
    icon?: string,
    style: Styles,
    theme: Theme,
    onClick: MouseEventHandler<HTMLButtonElement>,
    disable?: boolean
}

export const enum Styles {
    Outline = 'outline',
    Filled = 'filled',
}


export default function Button({name, icon = '', style, theme, onClick, disable = false}: Props) {
    return (
        <button className={`button ${style} ${theme}`} type='button' onClick={onClick} disabled={disable}>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {name && <span>{name}</span>}
        </button>
    )
}
