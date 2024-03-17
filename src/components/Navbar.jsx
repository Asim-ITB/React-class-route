/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../components/nav.css";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
function Navbar() {
  const contextValues = useContext(GlobalContext);
  const { theme, setTheme } = contextValues;
  const { backgroundColor, color } = theme;
  function themeFunc(e) {
    const value = e.target.value;
    if (value === "theme1") {
      setTheme({ backgroundColor: "red", color: "yellow" });
    } else if (value === "theme2") {
      setTheme({ backgroundColor: "blue", color: "green" });
    } else if (value === "theme3") {
      setTheme({ backgroundColor: "green", color: "black" });
    } else {
      setTheme({ backgroundColor: "white", color: "black" });
    }
  }
  return (
    <nav style={{ backgroundColor: backgroundColor }}>
      <ul className="navbar" style={{ backgroundColor: backgroundColor }}>
        <li>
          <NavLink style={{ color: color }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: color }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: color }} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <label style={{ color: color }}>
            Select Theme:
            <select onChange={themeFunc}>
              <option value=""></option>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
