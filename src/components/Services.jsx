import React from "react";

const Services = () => {
  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Our Services</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        {/* Service 1 */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3>Web Development</h3>
          <p>We build modern and responsive websites using React.</p>
        </div>

        {/* Service 2 */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3>UI Design</h3>
          <p>Clean and user-friendly interface designs.</p>
        </div>

        {/* Service 3 */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h3>Consulting</h3>
          <p>Helping businesses grow and succeed online.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;