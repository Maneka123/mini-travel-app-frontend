import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Listings from "./pages/Listings";

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* Main content */}
      <main className="App">
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;