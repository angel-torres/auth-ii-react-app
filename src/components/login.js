import React, { Component } from 'react';
import '../App.css';

export default class login extends Component {
  render() {
    return (
      <div className="container">
        <form className="login-form">
            <input></input>
            <input></input>
            <button className="waves-effect waves-light btn">Login</button>
        </form>
      </div>
    )
  }
}
