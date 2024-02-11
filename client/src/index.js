import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Success from "./pages/Success";
import Failure from "./pages/Failure"
import { UserProvider } from './UserContext';
import { SeatProvider } from './SeatContext';
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="donate" element={<Donate/>} />
          <Route path="success*" element={<Success/>}/>
          <Route path="failure*" element={<Failure/>}/>
        </Route>
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
