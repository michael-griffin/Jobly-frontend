import './App.css';
import {useState} from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  //currentUser state
  //token state
    //(both are living in context?)

  function changeUser(userInfo){
    //make API call here?
    setUser(userData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>

    </div>
  );
}

export default App;
