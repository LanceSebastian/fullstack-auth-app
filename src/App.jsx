import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center">
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fullstack Auth App</h1>
      <form className="flex flex-col gap-4 w-64 mx-auto bg-gray-200 p-4 rounded">
        <input className="border border-gray-400 rounded px-2 py-1" type="text" placeholder="Username" />
        <input className="border border-gray-400 rounded px-2 py-1" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white rounded px-4 py-1 hover:bg-blue-600 transition-colors" type="submit">Login</button>
      </form>
      <p>Don't have an account? <a className="text-blue-500 hover:underline" href="/register">Register</a></p>
    </>
  )
}

export default App
