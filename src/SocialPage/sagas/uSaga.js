import {take, put, call, cancel} from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config/index.json'
import store from '../store'
import appActionCreators from '../actions/index'
import {Redirect} from 'react-router-dom';
import {SubmissionError} from 'redux-form';
import {push} from 'react-router-redux';

function* authorizeRequest(username, password) {
    try {
        console.log(`try axios ${username} -   ${password} `)
        axios({
            method: 'post',
            url: config['api_url'] + '/api/auth/login',
            data: {
                username: username,
                password: password
            },
            //withCredentials: true,
            mode: "cors",
            transformRequest: [(data) => JSON.stringify(data)],
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://localhost:5000/api/universities/add'
            }
        })
            .then(response => {
                    console.dir(response.status);
                    if (response.status != 200)
                        store.dispatch(appActionCreators.app.user.authorizationError())
                }
            )
            .catch(error => {
                    throw error;
                }
            )
    } catch (error) {
        console.log("---- errro auth-------------")
        yield put(appActionCreators.user.otherError());
    }
    yield put(appActionCreators.app.user.isAuthorized())
    yield put(appActionCreators.app.showModal({showModal: false, childComponent: null}));
}

function* loginRequest() {
    yield put(push("/login"));
}

function* logIn(action) {
    yield action.payload;
}

//--------------------------
function* loginFlow() {
    while (true) {
        const ress = yield take(appActionCreators.app.user.logIn);//Очікуємо на екшн (результатом є екшн)
        const {username, password} = ress.payload;
        console.log("loginnnn flow:" + ress.payload.username);

        const task = yield call(authorizeRequest, username, password);
        const action = yield take(appActionCreators.app.user.logOut);
        //'/APP\/USER\/(LOG_OUT|AUTHORIZATION_ERROR|OTHER_ERROR)/');
        console.log("Srabotka = " + action.type)
        if (action.type === appActionCreators.app.user.logOut)
            yield cancel(task);

        yield put(appActionCreators.app.user.isNotAuthorized());
    }
}

function* rootSaga() {
    yield loginFlow();
}

export default rootSaga;