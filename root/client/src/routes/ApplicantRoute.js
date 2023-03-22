import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../util/domain";
import { ErrorView } from "../views";

export const ApplicantRoute = ({model}) => {

    const [isAuthorized, setIsAuthorized] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    
    useEffect( () => {
        if(isAuthorized){return}
        const token = model.currentUser && model.currentUser.token
        fetch(SERVER_URL + '/api/auth/applicant', {
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
    })

    return isAuthorized ? (
        <Outlet />
    ) : error ? (
        <ErrorView/>
    ) : <div className="loader"></div>

}