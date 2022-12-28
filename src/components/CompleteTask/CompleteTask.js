import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../UserContex/UserContex';

const CompleteTask = () => {
    const { user } = useContext(AuthContex)

    const [tasks, setTasks] = useState([]);
    const [state, setState] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/ctask?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)
            })
            .catch(e => console.log(e))
    }, [user.email, state])

    const handleDelete = id => {
        fetch(`http://localhost:5000/deletectask?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setState(!state)
                console.log(data)
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
                            <th>Not Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, i) => <tr key={task._id}>
                                <th>{i + 1}</th>
                                <td>{task.taskName}</td>
                                <td> <img className='w-[100px]' src={task.imageLink} alt="" /></td>
                                <td><button
                                    type="submit"
                                    class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Not Complete
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

export default CompleteTask;