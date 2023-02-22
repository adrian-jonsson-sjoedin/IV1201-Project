import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicantHomeView, RecruiterHomeView } from "../views";


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

    function HomeView() {
        if(currentUser.role_id === 1){
            return <ApplicantHomeView user={props.currentUser}/>
        }
        if(currentUser.role_id === 2){
            return <RecruiterHomeView user={props.currentUser} />
        }
    }
    
    return (
        <HomeView />
    );

}