import './App.css';
import { useState } from "react";
import { BrowserRouter, Navigate } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import userContext from "./userContext";


// TODO: Signup form error handling (make sure to validate all fields and show correct errors)
// Local storage for token and user (step 4, so after above tasks)

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  function login(userData, token) {
    setUser(userData);
    setToken(token);
    <Navigate to="/" />
  }

  function signup(userData) {
    setUser(userData);
    setToken(token);
    <Navigate to="/" />
  }

  function logout() {
    setUser(null);
    setToken(null);
    <Navigate to="/" />
  }

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
