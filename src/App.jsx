import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarProvider } from "./context/NavbarContext";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDashboardPage from "./pages/UserDashboardPage";
import UserAuthenticationPage from "./pages/UserAuthenticationPage";
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <NavbarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserAuthenticationPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<UserDashboardPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </NavbarProvider>
      </Router>

    </>
  );
}

export default App;
