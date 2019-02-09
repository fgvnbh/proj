import {createActions} from 'redux-actions'

const appActionCreators=createActions({
    APP:{
        USERS:{
            FETCH_REQUEST:undefined,
            FETCH_SUCCESS:undefined,
            FETCH_FAILURE:undefined,
            SAVED_USER:undefined,
        },
        ADD_FORM:{
            SEND_FORM:undefined,
            VALIDATION_ERROR:undefined,
            OTHER_ERROR:undefined
        },
        USER:{
            LOG_IN:undefined,
            LOG_OUT:undefined,
            AUTHORIZATION_ERROR:undefined,
            OTHER_ERROR:undefined,
            IS_AUTHORIZED:undefined,
            IS_NOT_AUTHORIZED:undefined,
        },
    }

});
export default appActionCreators;