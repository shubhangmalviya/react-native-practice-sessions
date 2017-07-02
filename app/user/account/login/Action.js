import {loginAPI} from './LoginApi'

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
 * @param text
 */
export const setTextChange = (property, text) => ({
    type: 'TEXT_CHANGE',
    [property] : text,
    property
});

export const submittingFormInProgress = () => ({
    type : 'SUBMITTING_FORM_IN_PROGRESS'
});

export const submitFormSuccess = (data) => ({
    type : 'SUBMIT_FORM_SUCCESS',
    data
});

export const submitFormFailure = (error) => ({
    type : 'SUBMIT_FORM_FAILURE',
    error
});

export function onTextChange(property, text) {
    return (dispatch) => {
        dispatch(setTextChange(property, text));
    }
}

export function performLogin(username, password) {
    return (dispatch) => {
        //dispatch(submittingFormInProgress());

        fetch('http://192.168.1.100:3001/sessions/create', {
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
          .then((response) => dispatch(submitFormSuccess(response)))
          .catch((error) => dispatch(submitFormFailure(error.message)));
    }
}