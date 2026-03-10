import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>

      <Header />

      <div className="App">

        <Routes>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;