import { createBrowserRouter } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MyTask from "./components/MyTask/MyTask";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import UpdateTask from "./components/UpdateTask/UpdateTask";

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
                path: '/', element: <AddTask></AddTask>
            },
            {
                path: '/mytask', element: <PrivateRoute> <MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/utask/:id',
                loader: ({ params }) => fetch(`https://to-do-server-eight.vercel.app/utask/${params.id}`),
                element: <PrivateRoute> <UpdateTask></UpdateTask></PrivateRoute>
            },
            {
                path: '/completetask', element: <PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
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