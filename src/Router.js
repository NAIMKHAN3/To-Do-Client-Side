import { createBrowserRouter } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MyTask from "./components/MyTask/MyTask";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/navbar', element: <Navbar></Navbar>
            },
            {
                path: '/addtask', element: <AddTask></AddTask>
            },
            {
                path: '/mytask', element: <MyTask></MyTask>
            },
            {
                path: '/completetask', element: <CompleteTask></CompleteTask>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
        ]
    }
])