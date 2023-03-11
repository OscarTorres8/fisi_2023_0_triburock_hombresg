import {Link} from "react-router-dom";
import {Theme} from "../../../common/Theme";
import Button, {Styles} from "./Button";
import {MouseEventHandler} from "react";

type Props = {
    name: string,
    icon: string,
    style: Styles,
    theme: Theme,
    path: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export function RedirectTo(
    {
        name, icon, style, theme, path, onClick = () => {}
    }: Props) {
    return (
        <Link to={path}>
            <Button name={name} icon={icon} style={style} theme={theme} onClick={onClick}/>
        </Link>
    )
}
