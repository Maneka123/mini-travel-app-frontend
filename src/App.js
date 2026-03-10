import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;