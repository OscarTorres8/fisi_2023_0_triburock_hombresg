import {MouseEventHandler} from "react";
import "./Button.css"

export const enum Type {
    ByDefault = "button",
    Gradient = "button--gradient",
    Outline = "button--outline",
}

export default function Button(
    {text, type, onClick}:
        {
            text: string,
            type: Type,
            onClick: MouseEventHandler
        }
) {
    return <button className={type} onClick={onClick}>{text}</button>
}
