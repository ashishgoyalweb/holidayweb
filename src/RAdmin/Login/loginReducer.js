const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                isLoggedIn: true
            };
        }
            case "LOGOUT": {
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state
    }
}