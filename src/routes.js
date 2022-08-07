import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Users from './pages/users';

function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/users" element={<Users />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;