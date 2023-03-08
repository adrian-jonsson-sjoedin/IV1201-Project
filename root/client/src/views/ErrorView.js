import { Link } from "react-router-dom"

export function ErrorView(){
    return (
        <div className="container">
            <div className="row">
            <h1> =( </h1>
            <h1>Something went wrong</h1>
            <Link to='/'>Go back to the Home page</Link>
            <span>or try refreashing the page</span>
            </div>
        </div>
    )
}