import React from 'react'

const OpenAccount = () => {
  return (
    <div className="p-10">
        <h2 className="text-3xl font-bold mb-4">Open an Account </h2>
        
        <form className="flex flex-col gap-4 max-w-md">
            <input type="text" placeholder="Full Name" className="boarder p-2 rounded" />
            <input type="email" placeholder="Email" className=" boarder p-2 rounder" />
            <input type="text" placeholder="ID Number" className=" boarder p-2 rounded" />
            <button className="bg-green-700 text-white p-2 rounded">
                Submit
            </button>
        </form>

    </div>
  )
}

export default OpenAccount