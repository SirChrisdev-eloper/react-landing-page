import React from 'react'
import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
<section
  className="relative text-center py-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-4 text-white">
      Discover Your Perfect Look
    </h1>

    <p className="text-white mb-6">
      Shop the latest beauty products, skincare, and fragrance
    </p>

    <button className="bg-black hover:text-gray-700 text-white p-2">
      Shop Now
    </button>
  </div>
</section>
  )
}
export default Hero