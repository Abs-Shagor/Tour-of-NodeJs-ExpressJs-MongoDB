import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    // deleting an user
    function handleDelete(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // if the user is deleted successfully the deletedCount should 1 or more, otherswise 0
            if(data.deletedCount) {
                const newUsers = users.filter(user => user._id!==id);
                setUsers(newUsers);
                toast.warning('User deleted!')
            }
        })
    }

    return (
        <div className='grid grid-cols-4 gap-10 my-20'>
            {
                users.map(user => {
                    return (
                        <div key={user._id} className='bg-blue-200 p-5 rounded-lg' >
                            <p>Name: {user.name} </p>
                            <p>Email: {user.email} </p>
                            <Link to={`/users/${user._id}`} className='text-blue-700 underline' >More details</Link>
                            <div className='flex gap-2 mt-5'>
                                <Link to={`/updateUser/${user._id}`} className='btn btn-info'>Update</Link>
                                <button onClick={() => handleDelete(user._id)} className='btn btn-secondary'>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllUsers;