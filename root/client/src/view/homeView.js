import { Link } from "react-router-dom"

export function HomeView(props){
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome {!props.user ? "" : props.user.firstName + " " + props.user.lastName}, you are now logged in</p>
                <Link to="/login">BACK TO LOGIN PAGE</Link>
            </header>
        </div>
    )
}