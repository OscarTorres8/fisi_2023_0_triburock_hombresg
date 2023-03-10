import "./Article.css"
import TextField from "../shared/textfield/TextField";
import {Theme} from "../../common/Theme";
import Button, {Styles} from "../shared/button/Button";
import {Dispatch, MouseEventHandler} from "react";
import {UserAuth} from "../../App";
import Error from "../shared/error/Error";
import {RedirectTo} from "../shared/button/RedirectTo";
import Loading from "../shared/loading/Loading";

type Props = {
    onLogin: MouseEventHandler<HTMLButtonElement>,
    user: UserAuth,
    setUser: Dispatch<UserAuth>
}

export default function LoginForm({onLogin, user, setUser}: Props) {

    return <div id="article">
        <div className="back">
            <RedirectTo
                name={"Regresar"}
                icon={"reply"}
                style={Styles.Filled}
                theme={Theme.Secondary}
                path={'/'}/>
        </div>
        <h1>Login</h1>
        <TextField
            name="Correo"
            placeholder="Ingrese su correo"
            icon="alternate_email"
            theme={Theme.Dark}
            onChange={({target}) => setUser({...user, 'email': target.value})}
            type={"email"}
        />
        <TextField
            name="Contraseña"
            placeholder="Ingrese su contraseña"
            icon="key"
            theme={Theme.Dark}
            onChange={({target}) => setUser({...user, 'contrasenia': target.value})}
            type={"password"}
        />

        <Button
            name={"Ingresar"}
            icon={"login"}
            style={Styles.Outline}
            theme={Theme.Light}
            onClick={onLogin}/>
        <>
            {
                user.logging && (<Loading name={"Verificando.."}/>)
            }
            {
                user.error && (<Error message={user.error}/>)
            }
        </>
    </div>;
}
