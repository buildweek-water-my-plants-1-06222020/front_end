import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import PlantList from './components/PlantList'


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Sign Up</Link>
          <Link to="/login">Sign In</Link>
          <Link to='/account'>Account</Link>
        </nav>
        <div>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/plantlist' component={PlantList} />
            <Route path='/account' component={Account} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
