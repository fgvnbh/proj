import {handleActions} from 'redux-actions'
import appActionCreators from '../actions'
const initialState={showModal:false, childComponent:null};
const reducer = handleActions(
    {
        [appActionCreators.app.SHOW_MODAL]: (state,action) => ({
            showModal: action.payload.showModal,
            childComponent:action.payload.childComponent
        }),
    },
    initialState
);
export  default reducer;