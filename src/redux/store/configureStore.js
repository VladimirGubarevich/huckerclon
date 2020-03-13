import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redusers/index';
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
  return store;
}