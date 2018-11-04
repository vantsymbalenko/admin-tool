import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers/index';

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(Thunk))
    );
    return store;
};