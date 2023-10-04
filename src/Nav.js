import "./Nav.css";
import { NavLink, Link } from "react-router-dom";



function Nav({ user, login, signup, logout }) {

  return (
    <nav className="NavBar">
      {user ?
        <>
          <NavLink to="/">Jobly</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/" onClick={logout}>Logout</NavLink>
        </>
        :
        <>
          <NavLink to="/">Jobly</NavLink>
          <NavLink to="/signup" >Sign Up</NavLink>
          <NavLink to="/login" >Login</NavLink>
        </>
      }
    </nav>

  );
}


export default Nav;