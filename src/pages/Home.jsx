import '../App.css'

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to the home page! This is a protected route that only authenticated users can access.</p>
            <a className="text-blue-500 hover:underline hover:cursor-pointer" href="/">Logout</a>
        </>
    )
}