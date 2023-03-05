import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/public/Home";
import Plans from "./pages/public/Plans";
import ContactUs from "./pages/public/Contact-us";
import Intranet from "./pages/public/Intranet";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/intranet' element={<Intranet/>}/>
        </Routes>
    )
}
