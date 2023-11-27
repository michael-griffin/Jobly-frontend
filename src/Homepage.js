import { NavLink } from "react-router-dom";
import './Homepage.css';

/** Homepage which displays welcome message or login/sign up buttons */
function Homepage({ user }) {
  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      <p>At Jobly, we believe every job application is a new opportunity for
        your future! But the <span className="Homepage-bold">most important</span> job application is always
        the one you may or may not currently be fielding from me</p>
      {user ?
        <h2>Welcome back, {user.username}!</h2>
        :
        <>
          <NavLink to="/signup"><button>Sign Up</button></NavLink>
          <NavLink to="/login"><button>Login</button></NavLink>
        </>
      }
    </div>
  );
}

export default Homepage;
