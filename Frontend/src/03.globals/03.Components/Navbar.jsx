import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full bg-navbarBg bg-no-repeat bg-cover bg-center border-b-4 border-amber-500">
            <div className="">
            <ul className="flex justify-end gap-10 p-6 pr-10 text-white">
                <NavLink to="/">
                <li>Accueil</li>
                </NavLink>
                <NavLink>
                <li>Partir</li>
                </NavLink>
            </ul>
            </div>
            
        </div>
    );
};

export default Navbar;