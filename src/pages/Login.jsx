import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    if(email && password){
      navigate("/")
    } else {
      alert("Please fill all fields")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-yellow-600 mb-2">
          Welcome Back 
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue shopping
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login