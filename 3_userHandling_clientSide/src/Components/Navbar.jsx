import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex gap-7 justify-center items-center bg-gray-100 p-2 rounded-lg  '>
            <Link to={'/users'} className='font-semibold '>ALL USERS</Link>
            <Link to={'/adduser'} className='font-semibold '>ADD USER</Link>
            <Link to={'/deleteuser'} className='font-semibold '>DELETE USER</Link>
            <Link to={'/updateuser'} className='font-semibold '>UPDATE USER</Link>
        </div>
        
    );
};

export default Navbar;