import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">All Listings</Link> | <Link to="/mylistings">My Listings</Link> | 
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | 
      <Link to="/logout">Logout</Link> | <Link to="/saved">Saved</Link>
    </header>
  );
}