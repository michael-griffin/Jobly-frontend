import "./Nav.css";
import {NavLink, Link } from "react-router-dom";

//FIXME: switch to Navlinks when we care about active for styling
//a.active

function Nav(){

  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  )
}


export default Nav;