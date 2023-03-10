import "./TextField.css"
import "./Dark.css"
import "./Light.css"
import {Theme} from "../../../common/Theme";
import React from "react";

type Props = {
    name: string,
    icon: string,
    theme: Theme,
    input: ()  => JSX.Element
}

export default function InputRef({name, icon, theme, input}: Props) {
    return <label className={`text-field ${theme}`}>
        <span>{name}</span>
        <div>
            <span className="material-symbols-outlined">{icon}</span>
            {
                input()
            }
        </div>
    </label>;
}

