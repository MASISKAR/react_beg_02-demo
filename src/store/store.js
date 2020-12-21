
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducer';
const middleware = applyMiddleware(thunk, logger);

export const store = createStore(reducer, composeWithDevTools(middleware));
