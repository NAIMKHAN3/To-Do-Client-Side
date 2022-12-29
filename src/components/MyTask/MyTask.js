import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../UserContex/UserContex';

const MyTask = () => {
    const { user } = useContext(AuthContex);
    const [state, setState] = useState(true)

    const [deleteState, setDeleteState] = useState(true)

    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://to-do-server-eight.vercel.app/mytask?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
            .catch(e => console.log(e))
    }, [user.email, state, deleteState])

    const handleComplete = (task) => {
        fetch('https://to-do-server-eight.vercel.app/completetask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                setState(!state)
                toast.success('Complete Task')
                navigate('/completetask')
            })
            .catch(e => console.log(e))
    }

    const handleDelete = id => {
        fetch(`https://to-do-server-eight.vercel.app/deletetask?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setDeleteState(!state)
                toast.success('Deleted Task')
            })
            .catch(e => console.log(e))
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Task Image</th>
                            <th>Update</th>
                            <th>Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{task.taskName}</td>
                                <td> <img className='w-[100px]' src={task.imageLink} alt="" /></td>
                                <td><Link to={`/utask/${task._id}`}>
                                    <button
                                        type="submit"
                                        class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                    >
                                        Update
                                    </button>
                                </Link></td>
                                <td><button
                                    onClick={() => handleComplete(task)}
                                    type="submit"
                                    class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Complete
                                </button></td>
                                <td><button
                                    onClick={() => handleDelete(task._id)}
                                    type="submit"
                                    class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Delete
                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;