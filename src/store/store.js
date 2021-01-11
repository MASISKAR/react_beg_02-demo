
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducer';

const middlewareArr = [thunk];

if(process.env.NODE_ENV === "development"){
    middlewareArr.push(logger);
}

const middleware = applyMiddleware(...middlewareArr);

export const store = createStore(reducer, composeWithDevTools(middleware));
