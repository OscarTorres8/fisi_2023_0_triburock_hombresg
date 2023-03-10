import "./Login.css"
import LoginForm from "../../components/login/LoginForm";
import {Dispatch} from "react";
import {UserAuth} from "../../App";
import onLogin from "./onLogin";
import {Navigate} from "react-router-dom";

type Props = {
    user: UserAuth,
    setUser: Dispatch<UserAuth>,
}

export default function Login({user, setUser}: Props) {
    if (user.logged) {
        return <Navigate to='/dashboard'/>
    }
    return (
        <div id="login">
            <LoginForm
                onLogin={() => onLogin({user, setUser})}
                user={user}
                setUser={setUser}/>
            <div id="aside"/>
        </div>
    )
}
