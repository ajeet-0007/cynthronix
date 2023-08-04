import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <>
            <div>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#f1e373" : "white",
                        };
                    }}
                >
                    {" "}
                    Our Work
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/services"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#f1e373" : "white",
                        };
                    }}
                >
                    Services
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/company"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#f1e373" : "white",
                        };
                    }}
                >
                    Company
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/career"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#f1e373" : "white",
                        };
                    }}
                >
                    Career
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="contact-us"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#f1e373" : "white",
                        };
                    }}
                >
                    Contact Us
                </NavLink>
            </div>

            {/* <div>
                <button type="button" class="btn btn-outline-light">
                    Get the Quote
                </button>
            </div> */}
            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </>
    );
}

export default Menu;
