import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config/index.json'
import store from '../store'
import appActionCreators from '../actions/index'

function* fetchUsers() {
    try {
        axios.get(config['api_url'] + '/api/users')
            .then(response => response.data)
            .then(users => {
                store.dispatch(appActionCreators.app.users.fetchSuccess({users}))
            })
            .catch(error => {
                store.dispatch(appActionCreators.app.users.fetchFailure({error}))
            })
    } catch (error) {
        yield put(appActionCreators.app.users.fetchFailure({error}));
    }
}
function* sendFormWatcher(action) {
    console.dir(action.payload.values);
    try {
        axios({
            method: 'post',
            url: config['api_url'] + '/api/users/add',
            data: {users: action.payload.values},
            //withCredentials: true,
            mode: "cors",
            transformRequest: [(data) => JSON.stringify(data)],
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:5000/api/universities/add'
            }
        })
            .then(response => response.json())
            .then(users => {
                put(appActionCreators.users.savedUser({values: action.payload.values})) //users?
            })
            .catch(error => {
                if (error.validationError) {
                    put(appActionCreators.addForm.validationError({error: error.validationError}));
                }
            })
    } catch (error) {
        yield put(appActionCreators.addFrom.otherError(error));
    }
}

function* rootSaga() {
    yield takeEvery(appActionCreators.app.users.fetchRequest, fetchUsers);
    yield takeEvery(appActionCreators.app.addForm.sendForm, sendFormWatcher);

}
export default rootSaga;
