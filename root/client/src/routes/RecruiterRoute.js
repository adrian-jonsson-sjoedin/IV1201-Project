import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../util/domain";
import { ErrorView } from "../views";

export const RecruiterRoute = ({model}) => {
    const [isAuthorized, setIsAuthorized] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    
    
    if(!isAuthorized){
        const token = model.currentUser && model.currentUser.token
        fetch(SERVER_URL + '/api/auth/recruiter', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then( res => {
            if(res.status === 200){
                setIsAuthorized("OK")
            }
            else {
                navigate('/')
            }
        })
        .catch(err => {
            setError(err)
        })
    }

    return isAuthorized ? (
        <Outlet />
    ) : error ? (
        <ErrorView/>
    ) : <div className="loader"></div>
}