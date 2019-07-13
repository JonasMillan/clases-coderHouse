import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk, createLogger())
);

export default function configureStore(initialState) {
return createStore(
    rootReducer,
    initialState,
    enhancer
);
}