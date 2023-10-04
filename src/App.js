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

// TODO: Use decode to get the user info from token, look up JWT Code library. Remove
// Set token here in the effect, instead of in API.js

/**  */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(function getUserToken(){
    let possToken = localStorage.getItem('token');
    if (token === null && possToken !== null){
      setToken(possToken);
    }
  }, []);

  function updateToken(token){
    setToken(token);
    localStorage.setItem('token', token);
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

  useEffect(function getUserData() {
    async function fetchUserData() {
      //console.log('token pre-fetch is: ', token);
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
