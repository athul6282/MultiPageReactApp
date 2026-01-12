import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <header style={{ backgroundColor: "blueviolet", color: "white", padding: "10px" }}>
        User Management App
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>

      <footer style={{ backgroundColor: "blueviolet", color: "white", padding: "10px" }}>
        © 2026 User App
      </footer>
    </BrowserRouter>
  );
}

export default App;
