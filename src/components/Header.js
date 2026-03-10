import { Link } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link> |{" "}
      {token ? (
        <>
          <Link to="/create">Create Listing</Link> |{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
}

export default Header;