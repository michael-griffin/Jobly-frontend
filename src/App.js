import './App.css';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import userContext from "./userContext";


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  function login(userData, token) {
    setUser(userData);
    setToken(token);
  }

  function signup(userData) {
    setUser(userData);
    setToken(token);
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
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
