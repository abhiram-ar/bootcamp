import { Link } from "react-router-dom"

const ErrorPage = ()=>{
    return (
        <div>
            <h1>Oh no this route dotn exist</h1>
            <Link to="/">Go back to home page</Link>
        </div>
    )
}

export default ErrorPage