import { Navigate, } from "react-router-dom";
import { ApplicantHomeView, RecruiterHomeView } from "../views";


/**
 * The home page, currently only redirects to login page when not logged in
 * @param {Object} props.model - The app model 
 */
export default function Home(props) {

    const Loader = () => {
        if(!props.currentUser){
            return <Navigate to='/login' />
        }
        return false
    }

    function HomeView() {
        if(props.currentUser.role_id === 1){
            return <ApplicantHomeView user={props.currentUser}/>
        }
        if(props.currentUser.role_id === 2){
            return <RecruiterHomeView user={props.currentUser} />
        }
    }
    
    return (
        <>
            {<Loader/> || <HomeView />}
        </>
    );

}