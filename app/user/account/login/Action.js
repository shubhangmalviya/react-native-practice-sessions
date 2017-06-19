import {loginAPI} from './LoginApi'

export const setTextChange = (property, text) => ({
    type: 'TEXT_CHANGE',
    [property] : text,
    property
});

export const submittingForm = () => ({
    type : 'SUBMITTING_FORM'
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

export function loginUser() {
    return (dispatch) => {
        dispatch(submittingForm());
        loginAPI().then((response) => {
            dispatch(submitFormSuccess(response))
        }).catch((error) => {
           dispatch(submitFormFailure(error))
        });
    }
}