import { Link } from 'react-router-dom'

export default function LoginView(props){

    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={ (e) => {e.preventDefault(); props.submitLoginRequest(e);}}>
 
                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" required/>
                    <label className="form-label" htmlFor="email">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" required/>
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                
                <div className="text-center text-danger">
                    <p>{props.loginInfo}</p>
                </div>
                
                <div className="row px-2">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>

                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    
                </div>
                </form>
                </div>
            </div>
            
        </div>
    );

}