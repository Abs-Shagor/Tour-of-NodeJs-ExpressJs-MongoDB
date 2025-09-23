import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {

    const phone = useLoaderData();
    return (
        <div className="mt-20 ">
            <div className='max-w-[500px] mx-auto'>
                <img src={'../../public/phoneSample.jfif'} alt={phone.model} className="w-[250px]" />
                <h2 className="text-2xl font-bold mb-2">{phone.brand} {phone.model}</h2>
                <p className="text-gray-700 mb-2">Price: ${phone.price}</p>
                <p className="text-gray-700 mb-2">Color: {phone.color}</p>
                <p className="text-gray-700 mb-2">Brand: {phone.brand}</p>
                <p className="text-gray-600 text-justify">{phone.description}</p>
            </div>
        </div>
    );
};

export default PhoneDetails;