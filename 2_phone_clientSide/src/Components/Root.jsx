import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1280px] mx-auto '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;