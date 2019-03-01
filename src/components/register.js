import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Register extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/register', this.state)
    .then(res => {
      localStorage.setItem('token',res.data.token);
      this.props.history.push('/users');
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="login-form">
            <input onChange={this.handleChanges} name='username' value={this.state.username} placeholder='username'></input>
            <input onChange={this.handleChanges} name='password' value={this.state.password} placeholder='password'></input>
            <button className="waves-effect waves-light btn">Register</button>
        </form>
      </div>
    )
  }
}

export default Register
