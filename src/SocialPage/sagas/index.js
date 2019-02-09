import usersSaga from './Sagas'
export default function* rootSaga() {
    yield usersSaga();
}
