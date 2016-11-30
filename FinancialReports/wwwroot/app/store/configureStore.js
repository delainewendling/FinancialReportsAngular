import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import initialState from '../reducers/initialState';

const logger = createLogger();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )
}