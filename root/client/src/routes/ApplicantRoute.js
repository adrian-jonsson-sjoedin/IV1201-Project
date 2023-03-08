import { Outlet, Navigate} from "react-router-dom";

export const ApplicantRoute = ({model}) => {

    if(!model.currentUser){
        return  <Navigate to="/login" replace />
    }
    if(model.currentUser.role_id !== 2){
        return  <Navigate to="/" replace />
    }

    return (
        <Outlet />
    );
}