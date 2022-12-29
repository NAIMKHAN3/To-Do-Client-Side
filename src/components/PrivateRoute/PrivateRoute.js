import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../UserContex/UserContex';

const PrivateRoute = ({ children }) => {



    const { user, loading } = useContext(AuthContex);
    const location = useLocation();
    if (loading) {
        return <div className="text-center">
            <h1 className='text-5xl font-bold'>Loading.....</h1>
        </div>
    }

    if (user && user?.uid) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;