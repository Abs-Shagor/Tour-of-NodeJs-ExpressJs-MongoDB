import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex gap-5 justify-center font-semibold bg-gray-200 rounded-lg p-2 '>
            <NavLink to={'/home'} >HOMES</NavLink>
            <NavLink to={'/phones'} >PHONES</NavLink>
            <NavLink to={'/addNewPhone'} >ADD NEW PHONES</NavLink>
        </div>
    );
};

export default Navbar;