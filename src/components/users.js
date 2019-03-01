import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
    }

    getUsers = e => {
        const token = localStorage.getItem('token')
        const request = {
            headers: {
                authorization: token
            }
        }
        axios
        .get('http://localhost:5000/api/users', request)
        .then(res => this.setState({users: res.data}))
        .catch(err => console.log(err))
    }

    logout = e => {
        e.preventDefault();
        this.props.history.push('/login')
        localStorage.removeItem('token');
        this.setState({
            users: []
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.getUsers} className="waves-effect waves-light btn">Get Users</button>
            <button onClick={this.logout} className="waves-effect waves-light btn">Logout</button>
            {this.state.users.map( user => <h2>{user.username}</h2>)}
        </div>
        )
    }
}

export default connect(null, { getUsers })(Users)
