import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex gap-7 justify-center items-center bg-gray-100 p-2 rounded-lg  '>
            <NavLink to={'/users'} className='font-semibold '>ALL USERS</NavLink>
            <NavLink to={'/adduser'} className='font-semibold '>ADD USER</NavLink>
        </div>
        
    );
};

export default Navbar;