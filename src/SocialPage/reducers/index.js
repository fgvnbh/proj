import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer'
import userReducer from './userReducer'
import modalReducer from './modalReducer'
const rootReducer = combineReducers({
    form: formReducer,
    showModal:modalReducer,
    user:userReducer,
    users:usersReducer,
})
export default rootReducer