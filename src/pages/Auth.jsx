import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import '../App.css'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            const res= await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email: formData.email, password: formData.password})
            })
            const data = await res.json()
            localStorage.setItem("token", data.token)
            navigate("/home")
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!")
                return
            }
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            })
            const data = await res.json()
            localStorage.setItem("token", data.token)
            navigate("/home")
        }
    }

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
                    <form className="flex flex-col gap-4 w-64 mx-auto bg-gray-200 p-4 rounded" onSubmit={handleSubmit}>
                        <input className="border border-gray-400 rounded px-2 py-1" type="email" placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password" />
                        <button className="bg-blue-500 text-white rounded px-4 py-1 hover:bg-blue-600 transition-colors" type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={() => setIsLogin(false)}>Register</a></p>
                </>
            ) : (
                <>
                    <h1>Register</h1>
                    <form className="flex flex-col gap-4 w-64 mx-auto bg-gray-200 p-4 rounded" onSubmit={handleSubmit}>
                        <input className="border border-gray-400 rounded px-2 py-1" type="text" placeholder="Username" value={formData.username} onChange={handleChange} name="username" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="email" placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password" />
                        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" />
                        <button className="bg-green-500 text-white rounded px-4 py-1 hover:bg-green-600 transition-colors" type="submit">Register</button>
                    </form>
                    <p>Already have an account? <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={() => setIsLogin(true)}>Login</a></p>
                </>
            )}
            
        </>
    )
}

export default Auth