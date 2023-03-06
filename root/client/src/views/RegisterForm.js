/**
 * View of the registration form.
 * @param {String} props.registerInfo - message when registation fails
 * @param {function} props.submitRegisterFrom - Subimits the form with an http POST request 
 */
export default function RegisterForm(props) {

    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={ (e) => {e.preventDefault(); props.submitRegisterForm(e)}}>
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">First name</label>
            <input type="text" id="name" className="form-control" name="name" required/>
            
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="surname">Last name</label>
            <input type="text" id="surname" className="form-control" name="surname" required/>
            
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" name="username" pattern="[A-Za-z0-9]{3,25}" required/>
            
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="pnr">Person number</label>
            <input type="text" id="pnr" className="form-control" pattern="[0-9]{8}-[0-9]{4}" title="YYYYMMDD-XXXX" name="pnr" required/>
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" name="email" required/>
        </div>


        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" name="password" pattern="[!-~]{4,30}" required/>
        </div>


        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="repeatPassword">Repeat password</label>
            <input type="password" id="repeatPassword" className="form-control" name="repeatPassword" pattern="[!-~]{4,30}" required/>
        </div>


        <div className="row px-2">
            <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
        </div>

        </form>
    </div>
    </div>
    </div>


    );

}