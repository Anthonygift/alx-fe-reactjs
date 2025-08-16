import React from "react";

function Footer() {
  const footerStyle = {
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
    marginTop: "20px",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
