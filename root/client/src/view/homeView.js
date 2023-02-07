import { Link } from "react-router-dom"

export function HomeView(){
    return (
        <div className="App">
            <header className="App-header">
                <p>YOU ARE NOW LOGGED IN</p>
                <Link to="/login">LOGIN</Link>
            </header>
        </div>
    )
}