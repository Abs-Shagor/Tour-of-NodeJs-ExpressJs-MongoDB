import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Phones = () => {

    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/phonesInfo')
            .then(res => res.json())
            .then(data => {
                setPhones(data);
            })
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-[30px] text-center font-semibold mb-5'>ALL PHONE COLLECTION</h1>
            <div className='grid grid-cols-4 gap-10 '>
                {
                    phones.map(phone => {
                        return (
                            <div key={phone.id} className='bg-blue-100 font-medium max-w-[300px] rounded-xl p-5  ' >
                                <p>Phone Name: {phone.model} </p>
                                <p>Brand: {phone.brand} </p>
                                <p>Color: {phone.color} </p>
                                <p>Price: ${phone.price}</p>
                                <Link to={`/phonedetails/${phone.id}`} className='text-blue-700 underline mt-5'>See more details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Phones;