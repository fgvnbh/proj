import {FETCH_STATUS} from "../constants"
import {handleActions} from 'redux-actions'
import appActionCreators from '../actions'
const initialState = {
    fetchingState: FETCH_STATUS.IS_PASSIVE,
    users: [],
    error: null
};
const reducer = handleActions(
    {
        [appActionCreators.app.users.fetchRequest]: state => ({
            ...state,
            fetchingState: FETCH_STATUS.IS_FETCHING
        }),
        [appActionCreators.app.users.fetchSuccess]: (state,action) => ({
            ...state,
            fetchingState: FETCH_STATUS.FETCHED_DATA,
            users: [...action.payload.users],
        }),
        [appActionCreators.app.users.FETCH_FAILURE]: (state,action) => ({
            ...state,
            fetchingState: FETCH_STATUS.FETCHING_ERROR,
            error: action.payload.error
        }),
        [appActionCreators.app.users.SAVED_USER]: (state,action) => ({
            ...state,
            fetchingState: FETCH_STATUS.IS_PASSIVE,
            users: [...state.users, {...action.payload}]
        }),
    },
    initialState
);
export  default reducer