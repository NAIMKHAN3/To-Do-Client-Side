import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../UserContex/UserContex';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContex);

    const signOut = () => {
        logOut()
            .then(result => { })
            .catch(e => console.log(e))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/addtask'>Add Task</Link></li>
                        {
                            user?.uid ? <>
                                <li><Link to='/mytask'>My Task</Link></li>
                                <li><Link to='/completetask'>Complete Task</Link></li>
                                <button
                                    onClick={signOut}
                                    type="submit"
                                    class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Log Out
                                </button>
                            </> : <>
                                <li><Link to='/login'>Log In</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">To-Do WebSite</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/addtask'>Add Task</Link></li>
                    {
                        user?.uid ? <>
                            <li><Link to='/mytask'>My Task</Link></li>
                            <li><Link to='/completetask'>Complete Task</Link></li>
                            <button
                                onClick={signOut}
                                type="submit"
                                class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                            >
                                Log Out
                            </button>
                        </> : <>
                            <li><Link to='/login'>Log In</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Navbar;