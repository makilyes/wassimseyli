import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { ReactComponent as Logo } from "../../assests/logo50SVG.svg";
import { useSelector } from "react-redux";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const user = useSelector(state => state.userReducer?.user);

  useEffect(()=>{
  })


  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link className="logo-container" to="/" onClick={closeMobileMenu}>
          <Logo className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              // to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
              <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/our-story"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/offers" className="nav-links" onClick={closeMobileMenu}>
              Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          {user?.userId ||
          sessionStorage.getItem("authenticated") === "true" ? (
            <li className="nav-item">
              <Link
                to="/logout"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
