import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import OpenAccount from "./pages/OpenAccount"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/open-account" element={<OpenAccount />} />
    </Routes>
  )
}

export default App