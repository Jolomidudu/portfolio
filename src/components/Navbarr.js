import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { RiMailStarLine } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import "./Navbarr.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    
      <nav className="navbar">
        <div className="nav-container"> 
          <NavLink exact to="/" className="nav-logo">
          <FcApproval color="white"size="1.5rem"/>Jolomi 
             

          </NavLink> 

          <div className="HeaderSocials">
      <a className="SocialIcons " href="https://www.linkedin.com/in/jolomi-o-d-ba851730/" rel="noreferrer" target="_blank">
         <IoLogoLinkedin size="2rem"/>
      </a>

      <a className="instagram" href="https://instagram.com/jolomidudu" rel="noreferrer" target="_blank">
         <IoLogoInstagram  size="2rem"/>
      </a>

      <a className="SocialIcons" href="mailto:info@jolomidudu.com" rel="noreferrer" target="_blank">
         <RiMailStarLine   size="2rem"/>
      </a>

      </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/stack"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Stacks
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-align-right"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
