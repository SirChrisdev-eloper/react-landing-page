import React from 'react'

const Login = () => {
  return (
    <div className="p-10">
        <h2 className="text-3xl font-bold mb-4">Member Login</h2>

        <form className="flex flex-col gap-4 max-w-md">
            <input type="text" placeholder="Email" className="boarder p-2 rounded" />
            <input type="password" placeholder="Password" className="border p-2 rounded"></input>
            
            <button className="bg-green-700 text-white p-2 rounded">
                Login

            </button>
        </form>

    </div>
  )
}

export default Login