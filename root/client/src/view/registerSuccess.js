import { Link } from "react-router-dom";

/**
 * View that informs the user that the registration was successful
 * and links them to the login page.
 */
export default function RegisterSuccessView(){
    
    return (
        <div className="container" >
            <div className="row justify-content-center my-5 ">
                <div className="col-lg-6">
                    
                <h1 className="text-center mb-4">Register successful!</h1>

                <div className="text-center text-success">
                    <p>You can now go to the <Link to="/login">login page</Link> to <Link to="/login">login</Link></p>
                </div>

                </div>
            </div>
        </div>
    );
}