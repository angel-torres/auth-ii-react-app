import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './components/login.js';
import Users from './components/users.js';


import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <NavLink className='navlink' to='/login'>Login</NavLink>
            <NavLink className='navlink' to='/users'>Users</NavLink>
            <hr/>
            <Route path='/login' component={Login}/>
            <Route path='/users' component={Users}/>
          </div>
        );
    }
}

export default App;
