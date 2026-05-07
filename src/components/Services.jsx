import React from "react";

const Services = () => {
  return (
    <section className="bg-white text-black ">
      <h2 className="text-center py-2 text-black text-4xl  ">Our Services</h2>

      <div
        className="flex gap-20 mb-6 text-center px-40 b"
      >
        {/* Service 1 */}
        <div
          style={{
            border: "2px solid #160202",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3>Beauty Products:</h3>

          <p>We offer all sorts of Beauty Products with affordable prices.</p>
        </div>

        {/* Service 2 */}
        <div
          style={{
            border: "2px solid #0f0202",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3>Designer Fits:</h3>
          <p>We offer a variety of designer fits from Turkey. </p>
        </div>

        {/* Service 3 */}
        <div
          style={{
            border: "2px solid #0c0202",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3> Home Decors:</h3>
          <p>Also, we sell home decorations to keep your style in check.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;