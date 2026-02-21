import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            <div className="flex items-center justify-center">
                <a target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            
            <h1>Fullstack Auth App</h1>
            {isLogin ? (
                <>
                    <h1>Login</h1>
                    <form className="flex flex-col gap-4 w-64 mx-auto bg-gray-200 p-4 rounded">
                        <input className="border border-gray-400 rounded px-2 py-1" type="text" placeholder="Username" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Password" />
                        <button className="bg-blue-500 text-white rounded px-4 py-1 hover:bg-blue-600 transition-colors" type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={() => setIsLogin(false)}>Register</a></p>
                </>
            ) : (
                <>
                    <h1>Register</h1>
                    <form className="flex flex-col gap-4 w-64 mx-auto bg-gray-200 p-4 rounded">
                        <input className="border border-gray-400 rounded px-2 py-1" type="text" placeholder="Username" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="email" placeholder="Email" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Password" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Confirm Password" />
                        <button className="bg-green-500 text-white rounded px-4 py-1 hover:bg-green-600 transition-colors" type="submit">Register</button>
                    </form>
                    <p>Already have an account? <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={() => setIsLogin(true)}>Login</a></p>
                </>
            )}
            
        </>
    )
}

export default Auth