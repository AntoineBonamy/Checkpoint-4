import { Routes, Route } from "react-router-dom";
import Garage from "../03.globals/01.Pages/Garage";
import Ship from "../03.globals/01.Pages/Ship";
import Parking from "../03.globals/01.Pages/Parking";
import Login from "../03.globals/01.Pages/Login";
import LandingPage from "../03.globals/01.Pages/LandingPage";
import Protected from "./Protected";
import Register from "../03.globals/01.Pages/Register";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/garage" element={<Protected> <Garage /></Protected>} />
            <Route path="/ship/:id" element={<Protected><Ship /></Protected>} />
            <Route path="/parking" element={<Protected><Parking /></Protected>} />
        </Routes>
    )
}

export default Router;