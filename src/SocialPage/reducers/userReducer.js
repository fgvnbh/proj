import {handleActions} from 'redux-actions'
import appActionCreators from '../actions'
const initialState={isAuthorized:false}
const reducer = handleActions(
    {
        [appActionCreators.app.user.IS_AUTHORIZED]: state => {
            return {
                ...state,
                isAuthorized: true,
            }
        },
        [appActionCreators.app.user.IS_NOT_AUTHORIZED]: state => ({
            ...state,
            isAuthorized:false
        }),
    },
    initialState
);

export  default reducer