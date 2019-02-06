import {compose, createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import watchActions from '../sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchActions);

export default store