import React from 'react';

const AddTask = () => {

    const imgbbKey = process.env.REACT_APP_IMGBB_KEY;
    console.log(imgbbKey)
    const handleTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const taskName = form.taskname.value;
        const description = form.description;
        const image = e;
        const formData = new FormData();
        console.log(image)
        console.log(formData)
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const imageLink = data.data?.url;
                console.log(imageLink)
            })

    }
    return (
        <div className='lg:w-1/3 border border-orange-400 mx-auto p-10 m-3'>
            <h1 className='text-4xl text-center text-sky-500 font-bold my-5'>Add Task</h1>
            <form onSubmit={handleTask}>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Task Name</span>
                    </label>
                    <input
                        type="text"
                        name="taskname"
                        placeholder="Enter your task name"
                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        required
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Task Description</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter your task description"
                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        required
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Task Image</span>
                    </label>
                    <input type="file" name='image' className="file-input file-input-bordered w-full" />
                </div>
                <div>
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center my-4 w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;