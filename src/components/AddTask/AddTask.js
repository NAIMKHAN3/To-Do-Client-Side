import React from 'react';

const AddTask = () => {
    return (
        <div className='lg:w-1/3 border border-orange-400 mx-auto p-10 m-3'>
            <h1>Add Task</h1>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Task Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Task Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Task Image</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full" />
            </div>
        </div>
    );
};

export default AddTask;