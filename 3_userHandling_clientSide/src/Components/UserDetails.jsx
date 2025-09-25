import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);
    return (
        <div className='mt-20'>
            <h1 className='text-[24px] text-center font-semibold mb-5'>Details of user: {user._id} </h1>
            <div className=' grid gap-3 bg-pink-200 p-5 rounded-lg ' >
                <p>Name: {user.name} </p>
                <p>Email: {user.email} </p>
                <p>Phone: {user.phone} </p>
                <p>Address: {user.address} </p>
            </div>
        </div>
    );
};

export default UserDetails;