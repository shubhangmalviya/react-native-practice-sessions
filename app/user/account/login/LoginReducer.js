const initialState = {
    username : "",
    password: "",
    isLoading: false,
    isLoginSuccess: undefined,
    error: {
        username: "",
        password: "",
        alert : ""
    }
};

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEXT_CHANGE':
            return {
                ...state,
                [action.property] : action[action.property]
            };
        case 'SUBMITTING_FORM':
            return {
                ...state,
                isLoading: true,
                isLoginSuccess: undefined
            };
        case 'SUBMIT_FORM_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isLoginSuccess: true
            };
        case 'SUBMIT_FORM_FAILURE':
            return {
                ...state,
                isLoading: false,
                isLoginSuccess: false,
                error: {
                    alert: action.error
                }
            };
        default:
            return state;
    }
}
