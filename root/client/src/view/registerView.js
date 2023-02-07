
export default function RegisterView(props) {

    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-6">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={ (e) => {e.preventDefault(); props.submitRegisterForm(e)}}>
        <div className="form-outline mb-4">
            <input type="text" id="registerFirstName" className="form-control" required/>
            <label className="form-label" htmlFor="registerFirstName">First name</label>
        </div>

        <div className="form-outline mb-4">
            <input type="text" id="registerLastName" className="form-control" required/>
            <label className="form-label" htmlFor="registerLastName">Last name</label>
        </div>

        <div className="form-outline mb-4">
            <input type="text" id="registerUsername" className="form-control" required/>
            <label className="form-label" htmlFor="registerUsername">Username</label>
        </div>

        <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" required/>
            <label className="form-label" htmlFor="registerEmail">Email</label>
        </div>


        <div className="form-outline mb-4">
            <input type="password" id="registerPassword" className="form-control" required/>
            <label className="form-label" htmlFor="registerPassword">Password</label>
        </div>


        <div className="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" className="form-control" required/>
            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
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