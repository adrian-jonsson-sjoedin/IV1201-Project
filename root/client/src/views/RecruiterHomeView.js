import { Link } from "react-router-dom"

export function RecruiterHomeView(props){
    return (
        <div className="App">
            <header className="App-header">
                <h1>Recruiter page</h1>
                <p>Welcome {!props.user ? "" : props.user.name + " " + props.user.surname}, you are now logged in</p>
                <Link to="/apply">View applications</Link>
            </header>
        </div>
    )
}