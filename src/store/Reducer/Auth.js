

const initialAuth = {}


export  default function Auth(state =initialAuth, action){
    if(action.type === 'change'){
        let currentState = {...state}
        currentState = action.payload
        return state = currentState
    }
    return state
}

// redux
// react-redux 
// @reduxjs/toolkit
