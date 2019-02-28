import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const GET_USERS ='GET_USERS';

export const getUsers = () => {
    const token = localStorage.getItem('token')
    const request = {
        headers: {
            authorization: token
        }
    }
    axios
    .get('http://localhost:5000/api/users', request)
    .then(res => dispatch({type: GET_USERS, payload:res.data}))
    .catch(err => console.log(err))
}