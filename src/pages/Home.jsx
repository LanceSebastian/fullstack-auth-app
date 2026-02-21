import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to the home page! This is a protected route that only authenticated users can access.</p>
            <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={logOut}>Logout</a>
        </>
    )
}

export default Home