import React from 'react';
import {BrowserRouter} from "react-router-dom";

import "./App.css"
import AppRoutes from "./modules/AppRoutes";

function App() {
    return <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
}

export default App;