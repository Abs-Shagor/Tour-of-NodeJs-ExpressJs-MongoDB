import { toast } from 'react-toastify';
import React from 'react';

const AddUser = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const newUser = {name, email, phone, address};

        fetch('http://localhost:3000/adduser', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('User added Successfully!');
            form.reset();
        });
    }
    return (
        <div className='grid gap-10 justify-center my-20'>
            <h1 className='text-[25px] text-center font-semibold '>Add New User</h1>
            <form onSubmit={handleSubmit} className='grid gap-3 w-[350px]' >
                <input type="text" name="name" required placeholder='Enter Name' className='w-full border border-gray-500 p-1 rounded-lg ' />
                <input type="email" name="email" required placeholder='Email' className='w-full border border-gray-500 p-1 rounded-lg ' />
                <input type="text" name="phone" required placeholder='Phone Number' className='w-full border border-gray-500 p-1 rounded-lg '  />
                <input type="text" name="address" required placeholder='Address' className='w-full border border-gray-500 p-1 rounded-lg ' />
                <button className='btn btn-primary rounded-lg'>Submit</button>
            </form>
        </div>
    );
};

export default AddUser;