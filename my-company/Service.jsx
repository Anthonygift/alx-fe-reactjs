import React from "react";

function Services() {
  const serviceList = ["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#ffc107" }}>Our Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {serviceList.map((service, index) => (
          <li 
            key={index} 
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px"
            }}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
  function Services() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

