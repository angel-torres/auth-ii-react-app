import {
    GET_USERS
} from '../actions'

const initialState = {
    users: []
}

export const reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload.data
            }
        }
    }
}