import { Routes, Route } from "react-router-dom";
import Garage from "../03.globals/01.Pages/Garage";
import Ship from "../03.globals/01.Pages/Ship";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Garage />} />
            <Route path="/ship/:id" element={<Ship />} />
        </Routes>
    )
}

export default Router;