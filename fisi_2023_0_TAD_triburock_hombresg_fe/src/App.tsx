import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Login from "./pages/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/clients/Clients";
import Trainers from "./pages/trainers/Trainers";
import Incomes from "./pages/incomes/Incomes";
import Plans from "./pages/plans/Plans";
import Home from "./pages/landing-page/home/Home";
import Pricing from "./pages/landing-page/princing/Pricing";
import ContactUs from "./pages/landing-page/contact-us/ContactUs";

export type UserAuth = {
    email: string,
    contrasenia: string,
    logging?: boolean
    logged: boolean,
    error?: string
}

function App() {
    const [user, setUser] = useState<UserAuth>({email: "", contrasenia: "", logged: false})

    const onLogout = () => {
        setUser({email: '', contrasenia: '', logged: false})
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/pricing' element={<Pricing/>}></Route>
                <Route path='/contact-us' element={<ContactUs/>}></Route>
                <Route path='/login' element={<Login user={user} setUser={setUser}/>}></Route>
                <Route element={<ProtectedRoutes logged={user.logged} redirectTo={'/login'}/>}>
                    <Route path='/dashboard' element={<Dashboard name={user.email} onLogout={onLogout}/>}/>
                    <Route path='/clients' element={<Clients name={user.email} onLogout={onLogout}/>}/>
                    <Route path='/trainers' element={<Trainers name={user.email} onLogout={onLogout}/>}/>
                    <Route path='/incomes' element={<Incomes name={user.email} onLogout={onLogout}/>}/>
                    <Route path='/plans' element={<Plans name={user.email} onLogout={onLogout}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
