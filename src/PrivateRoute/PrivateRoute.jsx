import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
          </div>
        );
        
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={`/signIn`}></Navigate>
    )
}

export default PrivateRoute
