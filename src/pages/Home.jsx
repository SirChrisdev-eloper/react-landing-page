import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Footer from "../components/Footer"

const App = () => {
  const handleAlert= () => alert('Action triggered!')

  return (
    <div>
      <Navbar />
            <Hero />
            <Services />
            <Footer />
        </div>
  )
}

export default App