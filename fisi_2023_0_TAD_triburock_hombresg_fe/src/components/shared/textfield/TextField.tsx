import "./TextField.css"
import "./Dark.css"
import "./Light.css"
import {Theme} from "../../../common/Theme";
import React, {ChangeEventHandler, LegacyRef} from "react";

type Props = {
    name: string,
    placeholder: string,
    icon: string,
    theme: Theme,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    type?: string,
    ref?: LegacyRef<HTMLInputElement> | null
}

export default function TextField({name, placeholder, icon, theme, onChange = () => {}, type = 'text', ref}: Props) {
    return <label className={`text-field ${theme}`}>
        <span>{name}</span>
        <div>
            <span className="material-symbols-outlined">{icon}</span>
            <input placeholder={placeholder} onChange={onChange} type={type} ref={ref}/>
        </div>
    </label>;
}

