import { Link } from "react-router-dom"

export function ApplicantHomeView(props){
    return (
        <div className="App">
            <header className="App-header">
                <h1>Applicant page</h1>
                <p>Welcome {!props.user ? "" : props.user.name + " " + props.user.surname}, you are now logged in</p>
                <Link to="/apply">Fill in the application form</Link>
            </header>
        </div>
    )
}