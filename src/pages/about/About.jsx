import { Outlet } from "react-router-dom";
import "./about.css";
import Sidenav from "./components/Sidenav";
function About() {
  return (
    <div className="aboutLayout">
      <Sidenav />
      <div className="about-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default About;
