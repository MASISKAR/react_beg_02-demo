import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './demo/Counter';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = {
  count: 0,
  text: 'hello'
};

const reducer = (state = defaultState, action) => {
  console.log('action', action)
  console.log('state', state)

switch(action.type){
  case 'CHANGE_VALUE': {
    return {
      ...state,
      count: state.count + action.value
    };
  }

  case 'CHANGE_MESSAGE': {
    return {
      ...state,
      text: action.message
    }
  }

  default: return state;
}

  // if (action.type === 'CHANGE_VALUE') {
  //   return {
  //     ...state,
  //     count: state.count + action.value
  //   };

  // }

  // if(action.type === 'CHANGE_MESSAGE'){
  //   return {
  //     ...state,
  //     text: action.message
  //   }
  // }

  // return state;
};

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
