import { Navigate, } from "react-router-dom";
import { ApplicantHomeView, RecruiterHomeView } from "../views";


/**
 * The home page, currently only redirects to login page when not logged in
 * @param {Object} props.model - The app model 
 */
export default function Home(props) {
const currentUser = props.model.currentUser
   
    const Loader = () => {
        if(!currentUser){
            return <Navigate to='/login' />
        }
        return null
    }

    function HomeView() {
        console.log(currentUser)
        if(currentUser.role_id === 1){
            console.log(currentUser)
            return <ApplicantHomeView user={currentUser}/>
        }
        if(currentUser.role_id === 2){
            return <RecruiterHomeView user={currentUser} />
        }
    }
    
    return (
        <>
            {<Loader/> || <HomeView />}
        </>
    );

}
