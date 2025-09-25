import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const user = useLoaderData();

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const userInfo = { name, email, phone, address };

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User Information is Updated!');
                form.reset();
            });
    }

    return (
        <div className='grid gap-10 justify-center my-20'>
            <h1 className='text-[25px] text-center font-semibold '>Update User Info.</h1>
            <form onSubmit={handleSubmit} className='grid gap-3 w-[350px]' >
                <input type="text" name="name" required defaultValue={user.name} className='w-full border border-gray-500 p-1 rounded-lg ' />
                <input type="email" name="email" required defaultValue={user.email} className='w-full border border-gray-500 p-1 rounded-lg ' />
                <input type="text" name="phone" required defaultValue={user.phone} className='w-full border border-gray-500 p-1 rounded-lg ' />
                <input type="text" name="address" required defaultValue={user.address} className='w-full border border-gray-500 p-1 rounded-lg ' />
                <button className='btn btn-info rounded-lg'>Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;