import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ padding: "15px", borderBottom: "1px solid gray" }}>

      <Link to="/">Home</Link> | 
      <Link to="/register"> Register</Link> | 
      <Link to="/login"> Login</Link>

    </div>
  );
}

export default Header;