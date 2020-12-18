const LoggedReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SIGN_IN' : 
            return !state;
        default: 
            return state;
    }
}

export default LoggedReducer