import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Donate from "./pages/Donate";
import { UserProvider } from './UserContext';
import { SeatProvider } from './SeatContext';
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="donate" element={<Donate/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <SeatProvider>
      <App />
      <Footer/>
    </SeatProvider>
  </UserProvider>
);
