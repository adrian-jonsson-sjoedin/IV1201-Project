import { Outlet, Navigate} from "react-router-dom";

export const RecruiterRoute = ({model}) => {
    if(!model.currentUser){
        console.log("redirecting to login")
        return  <Navigate to="/login" replace />
    }
    if(model.currentUser.role_id !== 1){
        console.log("redirecting to home")
        return  <Navigate to="/" replace />
    }

    return (
        <Outlet />
    );
}