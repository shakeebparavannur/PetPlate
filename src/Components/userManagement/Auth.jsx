import React from 'react'
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {
    // const navigate = useNavigate()
    const log = localStorage.getItem("login");
    if (log =="false"){
        return <Navigate to="/login"/>;
    }
  return (
    <div>
        {children}
    </div>
  )
    }



export default Auth