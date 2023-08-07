import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cynthronixLogo from "../../assets/cynthronix_logo.png";
import { NavLink } from "react-router-dom";
import "./BrandExample.css";
import { useState, useRef, useEffect } from "react";

function CollapsibleExample() {
  const [show, setShow] = useState(false);
  const navbarRef = useRef()

  const showNavbar = (e) => {
    setShow(!show);
  };
  
  const showAndHideOutSideDropDown = (event)=>{

  
      if(event.target.id !== 'dropdown-icon'){
            
       navbarRef.current.classList.remove('show');  
      }
  }
 

  useEffect(()=>{

    window.addEventListener("click", showAndHideOutSideDropDown)

    return ()=>{
      window.removeEventListener("click", showAndHideOutSideDropDown)
  }
},[])



  return (
      <nav
          class="navbar navbar-expand-lg bg-body-tertiary  ticky-top"
          style={{ backgroundColor: "#031e16" }}
      >
          <div class="container-fluid " style={{ backgroundColor: "#031e16" }}>
              <img src={cynthronixLogo} alt="logo"></img>
              <button
                  className={show ? "navbar-toggler show" : "navbar-toggler"}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={showNavbar}
              >
                  <span class="navbar-toggler-icon " id="dropdown-icon"></span>
              </button>
              <div
                  class="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                  ref={navbarRef}
              >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <NavLink
                              to="/"
                              class="nav-link active"
                              style={({ isActive }) => {
                                  return {
                                      color: isActive ? "#f1e373" : "white",
                                  };
                              }}
                          >
                              Our Work
                          </NavLink>
                      </li>
                      <li class="nav-item">
                          <NavLink
                              to="/services"
                              class="nav-link active"
                              style={({ isActive }) => {
                                  return {
                                      color: isActive ? "#f1e373" : "white",
                                  };
                              }}
                          >
                              Services
                          </NavLink>
                      </li>
                      <li
                          class="nav-item"
                          
                      >
                          <NavLink
                              to="/company"
                              class="nav-link active"
                              style={({ isActive }) => {
                                  return {
                                      color: isActive ? "#f1e373" : "white",
                                  };
                              }}
                          >
                              Company
                          </NavLink>
                      </li>
                      <li
                          class="nav-item"
                      >
                          <NavLink
                              to="/career"
                              class="nav-link active"
                              style={({ isActive }) => {
                                  return {
                                      color: isActive ? "#f1e373" : "white",
                                  };
                              }}
                          >
                              Career
                          </NavLink>
                      </li>
                      <li class="nav-item">
                          <NavLink
                              to="/contact-us"
                              class="nav-link active"
                              style={({ isActive }) => {
                                  return {
                                      color: isActive ? "#f1e373" : "white",
                                  };
                              }}
                          >
                              Contact Us
                          </NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default CollapsibleExample;
