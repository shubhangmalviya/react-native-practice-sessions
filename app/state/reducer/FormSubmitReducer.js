
export function formSubmitReducer(state = {}, action) {
    switch (action.type) {
        case 'SUBMITTING_FORM':
            return {
                ...state,
                [action.screen]: {
                    ...state[action.screen],
                    isLoading: true,
                    isSubmitted: undefined,
                    error: undefined,
                    payload: action.data
                }
            };
        case 'SUBMIT_FORM_SUCCESS':
            return {
                ...state,
                [action.screen]: {
                    ...state[action.screen],
                    isLoading: false,
                    isSubmitted: true,
                    error: undefined,
                    payload: action.data
                }
            };
        case 'SUBMIT_FORM_FAILURE':
            return {
                ...state,
                [action.screen]: {
                    isLoading: false,
                    isSubmitted: false,
                    payload: action.data,
                    error: {
                        message: action.error
                    }
                }
            };
        default:
            return state;
    }
}
