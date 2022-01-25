import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { reducers, saga } from '../models';

import alert from './middleware/alerts';


const composeEnhancers = (
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = (...sagas) => {
    sagas.forEach((item) => sagaMiddleware.run(item));
};

const tools = [thunk, alert, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { logger } = require('redux-logger');

    tools.push(logger);
}


const middlewware = composeEnhancers(applyMiddleware(...tools));
const createStoreWithMiddleware = middlewware(createStore);
const store = createStoreWithMiddleware(reducers);

sagaConnect(...saga);

export default store;
