import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center text-black p-5">
      
      {/* Left side */}
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-amber-500">EVE COSMETICS</h2>
        
      </div>

      {/* Right side */}
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/open-account">Open Account</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

    </div>
  )
}

export default Navbar