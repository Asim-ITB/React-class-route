/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../components/nav.css";
function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
