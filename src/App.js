import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import userContext from "./userContext";
import JoblyApi from './api';


// Notes on context:
//  - Want to use user context primarily in jobCard component. For profile update form, nav and homepage, we can pass directly as prop.

// Local storage for token and user (step 4, so after above tasks)

// TODO: Use decode to get the user info from token, look up JWT Code library. Remove
// Set token here in the effect, instead of in API.js

/**  */
function App() {
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // TODO: Make these async functions that also set the token
  function login(username, token) {
    setUsername(username);
    setToken(token);
  }

  function signup(username, token) {
    setUsername(username);
    setToken(token);
  }

  function logout() {
    setUser(null);
    setUsername(null);
    setToken(null);
  }

  useEffect(function getUserData() {
    async function fetchUserData() {
      if (username && token) {
        const userData = await JoblyApi.getUserInfo(username);
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
