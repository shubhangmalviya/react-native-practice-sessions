import {combineReducers } from 'redux'
import {formSubmitReducer} from './FormSubmitReducer'
import {textChangeReducer} from './TextChangeReducer'

export default combineReducers({
    formSubmitReducer,
    textChangeReducer
});
