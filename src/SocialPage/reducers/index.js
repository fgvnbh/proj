import {combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer'
const rootReducer = combineReducers({
    form: formReducer,
    users:usersReducer,
})
export default rootReducer