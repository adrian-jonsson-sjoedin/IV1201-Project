import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { HomeView } from "../views/ApplicantHomeView";
import Apply from "./ApplyPresenter";


/**
 * The home page, currently only redirects to login page when not logged in
 * @param {Object} props.model - The app model 
 */
export default function Home(props) {
    const [currentUser, ] = useState(props.model.currentUser);
    const navigate = useNavigate();
    
    useEffect( () => {
        if(!currentUser){
            navigate("/login");
        }
    }, [currentUser]);
    
    return (
        <HomeView user={currentUser}/>
        //<Apply />
    );

}