import React, { useEffect, useState } from 'react';

const AddNewPhone = () => {

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/phonesInfo')
            .then(res => res.json())
            .then(data => {
                setPhones(data);
            })
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const brand = form.brand.value;
        const color = form.color.value;
        const price = form.price.value;
        const description = form.description.value;
        form.reset();

        console.log(model, brand, color, price, description);
        const newId = phones.length+1;
        const NewPhone = {
            id: newId,
            brand, model, price, color, description
        }
        fetch('http://localhost:3000/phonesInfo',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewPhone)
        })
        .then(res => res.json())
        .then(data => {
            console.log('All Phones Information after adding new phone: ', data);
        })
    }


    return (
        <div className=' mt-20 '>
            <form onSubmit={handleFormSubmit} className='grid gap-3 max-w-[400px] mt-10 mx-auto border border-gray-500 rounded-lg p-5 '>
                <h1 className='text-[30px] text-center font-semibold mb-7 '>Add New Phone</h1>
                <input type="text" name="model" id="" placeholder='Enter Phone Name/Model' className='w-full border border-gray-500 p-2 rounded-lg' />
                <input type="text" name="brand" id="" placeholder='Brand' className='w-full border border-gray-500 p-2 rounded-lg' />
                <input type="text" name="color" id="" placeholder='Color' className='w-full border border-gray-500 p-2 rounded-lg' />
                <input type="text" name="price" id="" placeholder='Price' className='w-full border border-gray-500 p-2 rounded-lg' />
                <input type="text" name="description" id="" placeholder='Description' className='w-full border border-gray-500 px-2 py-6 rounded-lg' />
                <button className='btn btn-primary rounded-lg p-2 '>Add</button>
            </form>
        </div>
    );
};

export default AddNewPhone;