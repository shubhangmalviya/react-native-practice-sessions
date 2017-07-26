
/**
 * This file list all the action creators (functions that return an action),
 * we export them so that we can use them else where.
 */

/**
 * Redux action creators don't support asynchronous actions like fetching data,
 * so here's where we utilise Redux Thunk.
 * Thunk allows you to write action creators that return a function instead of an action.
 * The inner function can receive the store methods dispatch and getState as parameters
 */

/**
 *
 * @param property
 * @param screen
 * @param text
 */
export const setTextChange = (property, screen, text) => ({
    type: 'TEXT_CHANGE',
    [property] : text,
    property,
    screen
});

export const submitFormSuccess = (data, screen) => ({
    type : 'SUBMIT_FORM_SUCCESS',
    data,
    screen
});

export const submitFormFailure = (error, screen) => ({
    type : 'SUBMIT_FORM_FAILURE',
    error,
    screen
});

export function onTextChange(property, screen, text) {
    return (dispatch) => {
        dispatch(setTextChange(property, screen, text));
    }
}

export function performLogin(username, password) {
    return (dispatch) => {
        //dispatch(submittingFormInProgress());

        fetch('http://172.18.4.33:3001/sessions/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
          .then((response) => dispatch(submitFormSuccess(response, "Login")))
          .catch((error) => dispatch(submitFormFailure(error.message, "Login")));
    }
}