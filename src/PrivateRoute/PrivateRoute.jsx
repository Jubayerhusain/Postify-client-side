import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

function PrivateRoute({children}) {
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    return (
        <Navigate to={`/signIn`}></Navigate>
    )
}

export default PrivateRoute
