/* global google */
import "./Navbar.css";
import imgLogo from "../assets/navbar_main_logo.png";
import { useEffect, useState, useCallback } from 'react';
import { Outlet, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useUser } from '../UserContext';

const Navbar = () => {
  const { user, updateUser } = useUser();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const storeSignIn = localStorage.getItem('isSignIn');
    if (storeSignIn) {
      setIsSignIn(JSON.parse(storeSignIn));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('isSignIn', JSON.stringify(isSignIn));
  }, [isSignIn]);

  const handleCallbackResponse = useCallback(response => {
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    updateUser(userObject);
    setIsSignIn(true);
  }, [updateUser]);

  function handleSignOut(event){
    updateUser({});
    setIsSignIn(false);
  }

  useEffect(()=>{
    if (isSignIn) {
      document.getElementById("signInSidebar").hidden = true;
      document.getElementById("signInMain").hidden = true;
    } else {
      document.getElementById("signInSidebar").hidden = false;
      document.getElementById("signInMain").hidden = false;
    }
  }, [isSignIn])

  useEffect(() => {
    if (window.google && window.google.accounts) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInSidebar"),
        {
          theme: "outline",
          size: "standard",
          text: "Login",
          shape: "pill",
          color: "white",
          locale: "en"
        }
      );
  
      google.accounts.id.renderButton(
        document.getElementById("signInMain"),
        {
          theme: "outline",
          size: "standard",
          text: "Login",
          shape: "pill",
          color: "white",
          locale: "en"
        }
      );
    } else {
      window.location.reload();
      console.error("Google Sign-In script not loaded");
    }
  }, [handleCallbackResponse]);
  
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <nav className="navbar">
        <div className={`nav-items sidebar`}>
          <ul className={`${isSidebarVisible ? 'visible' : ''}`}>
            <span>
              <li><a onClick={toggleSidebar}><i className="ri-close-fill"></i></a></li>
            </span>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="donate">Donate</Link>
            </li>
            <li>
              <div id="signInSidebar"></div>
              {user.picture &&
                <div>
                  <img className="circle-image" src={user.picture} onClick={ (e) => handleSignOut(e) } alt="Profile"></img>
                </div>
              }
            </li>
          </ul>
        </div>
        <div className="nav-items">
          <ul>
            <li><img src={imgLogo} alt="Logo" className="logo"/></li>
            <div className="nav__link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="donate">Donate</Link>
              </li>
              <li>
                <div id="signInMain"></div>
                {user.picture &&
                  <div>
                    <img className="circle-image" src={user.picture} onClick={ (e) => handleSignOut(e) } alt="Profile"></img>
                  </div>
                }
              </li>
            </div>
            <li><a onClick={toggleSidebar} id="toggle"><i className="ri-menu-fill"></i></a></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
