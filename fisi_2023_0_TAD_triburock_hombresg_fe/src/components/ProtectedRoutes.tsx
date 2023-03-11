import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoutes({logged, redirectTo = '/login'}: { logged: boolean, redirectTo: string }) {
    if (!logged) {
        return <Navigate to={redirectTo}/>
    }
    return <Outlet></Outlet>
}
