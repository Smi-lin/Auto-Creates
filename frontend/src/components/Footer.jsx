import React from "react";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();
  return (
    <footer
      className="--flex-center b-top"
      style={{ fontSize: "25px", display: "flex", alignContent: "center" }}
    >
      <p style={{  display: "flex", alignItems: "center", gap: "4px" }}>
        All Rights Reserved || Copyright &copy; {currentDate.getFullYear()}{" "}
        <FaBox />
        <Link>HayMilda</Link>
      </p>
    </footer>
  );
};

export default Footer;
