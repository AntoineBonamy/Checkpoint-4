import { Routes, Route } from "react-router-dom";
import Garage from "../03.globals/01.Pages/Garage";
import Ship from "../03.globals/01.Pages/Ship";
import Parking from "../03.globals/01.Pages/Parking";
import Login from "../03.globals/01.Pages/Login";

function Router() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/garage" element={<Garage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ship/:id" element={<Ship />} />
            <Route path="/parking" element={<Parking />} />
        </Routes>
    )
}

export default Router;