import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import userContext from "./userContext";
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

// Notes on context:
//  - Want to use user context primarily in jobCard component. For profile update form, nav and homepage, we can pass directly as prop.

// Local storage for token and user (step 4, so after above tasks)
// TODO: DOCSTRINGS!


/** App: Job app. Allows user to sign in and view jobs and companies
 *    including options for user to search for jobs by company or by job title.
 * Displays Nav bar and routes list.
 *
 * Props: None
 *
 * State:
 *  - User: The current logged in user, if any
 *  - Token: Issued from backend, used for authorization
 *
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(function getUserToken() {
    let possToken = localStorage.getItem('token');
    // console.log("possToken in getUserToken", possToken, typeof possToken);
    if (token === null && possToken !== null && possToken !== undefined) {
      setToken(possToken);
    }
  }, []);

  /** Updates token and sets within local storage (removes if not available) */
  function updateToken(token) {
    setToken(token);
    (token) ?
      localStorage.setItem('token', token) :
      localStorage.removeItem("token"); // Remove token from local storage
  }

  async function login(formData) {
    const token = await JoblyApi.loginUser(formData);
    updateToken(token);
  }

  async function signup(formData) {
    const token = await JoblyApi.registerUser(formData);
    updateToken(token);
  }

  function logout() {
    setUser(null);
    updateToken(null);
  }

  /** Checks state for a token, if token exists set token in Jobly API
   *    and set user state if token exists. */
  useEffect(function getUserData() {
    async function fetchUserData() {
      if (token !== null) {
        JoblyApi.token = token;
        const decoded = jwt_decode(token);

        const userData = await JoblyApi.getUserInfo(decoded.username);
        setUser(userData.user);
      }
    }
    fetchUserData();
  }, [token]);


  return (
    <div className="App">
      <userContext.Provider value={{ user, token }}>
        <BrowserRouter>
          <Nav user={user} logout={logout} />
          <RoutesList user={user} login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
