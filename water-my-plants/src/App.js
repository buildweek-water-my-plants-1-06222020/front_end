import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import PlantList from './components/PlantList'
import UserProfile from './components/UserProfile'
import EditPlant from './components/EditPlant'
import AddPlant from './components/AddPlant'
import PlantContext from './contexts/PlantContext'
import UserContext from './contexts/UserContext'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PrivateRoute from './components/PrivateRoute'
import { NavLink } from 'react-router-dom';

function App() {
  const [plantList, setPlantList] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState({
    userId: window.localStorage.getItem('userId')
  })

  const handleLogout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }
  return (
    <Router>
      <UserContext.Provider value={{ userId, setUserId }}>
        <PlantContext.Provider value={{ plantList, setPlantList }}>
          <div className="App">
            <nav>
              <NavLink to="/">Sign Up</NavLink>
              <NavLink to="/login" >Sign In</NavLink>
              <NavLink to='/account'>Account</NavLink>
              <NavLink to='/plantlist'>Plant List</NavLink>
              <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
            </nav>
            <div>
              <Switch>
                <Route exact path='/' component={SignUp} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/plantlist' component={PlantList} />
                <PrivateRoute path='/account' component={UserProfile} />
                <PrivateRoute path='/edit-plant/:id' component={EditPlant} />
                <PrivateRoute path='/add-plant' component={AddPlant} />
              </Switch>
            </div>
          </div>
        </PlantContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
