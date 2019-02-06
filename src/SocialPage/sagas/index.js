import {fork} from 'redux-saga/effects';
import usersSaga from './Sagas'
import userSaga from './uSaga'
export default function* rootSaga() {
    yield fork(userSaga);
    yield  usersSaga();
}
