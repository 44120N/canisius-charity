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
import { SnapProvider } from './SnapContext';
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="donate" element={<Donate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <SeatProvider>
      <SnapProvider>
        <App />
        <Footer/>
      </SnapProvider>
    </SeatProvider>
  </UserProvider>
);
