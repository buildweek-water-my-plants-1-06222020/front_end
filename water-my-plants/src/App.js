import React, {useState} from 'react';
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

function App() {
  const [plantList, setPlantList] = useState([])
  const [userId, setUserId] = useState({
    userId:window.localStorage.getItem('userId')
  })
  

  return (
    <Router>
      <UserContext.Provider value={{userId, setUserId}}>
       <PlantContext.Provider value={{plantList, setPlantList}}>
      <div className="App">
        <nav>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Sign In</Link>
          <Link to='/account'>Account</Link>
          <Link to='/plantlist'>Plant list</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={Login}/>
            <Route path='/plantlist' component={PlantList} />
            <Route path='/account' component={UserProfile} />
            <Route path='/edit-plant/:id' component={EditPlant} />
            <Route path='/add-plant' component={AddPlant} />
          </Switch>
        </div>
      </div>
      </PlantContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
