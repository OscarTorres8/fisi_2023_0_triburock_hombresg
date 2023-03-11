import {UserAuth} from "../../App";
import {Dispatch} from "react";

type Props = {
    user: UserAuth,
    setUser: Dispatch<UserAuth>
}

export default async function onLogin({user, setUser}: Props) {

    setUser({...user, error: '', logging: true})

    const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email: user.email,
            contrasenia: user.contrasenia
        })
    });
    const content = await response.json();

    setUser({...user, logging: false})

    const logged = content['message'] === 'success'

    if (logged) {
        console.log("logged")
        setUser({...user, contrasenia: '', logged: true, error: ''})
        return
    }
    setUser({...user, error: content['message']})
}
