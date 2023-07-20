import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const handleLogOut = () => {
        localStorage.clear();
    }

    return (
        <div className="w-full bg-navbarBg bg-no-repeat bg-cover bg-center border-b-4 border-amber-500">
            <div className="">
            <ul className="flex justify-end gap-10 p-6 pr-10 text-white">
                <NavLink to="/garage">
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/parking">
                    <li>Parking</li>
                </NavLink>
                <NavLink to="/" onClick={handleLogOut}>
                <li>Partir</li>
                </NavLink>
            </ul>
            </div>
            
        </div>
    );
};

export default Navbar;