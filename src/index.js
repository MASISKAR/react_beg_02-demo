import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import greeting, {name as secondName, surname} from './demo/hello';
// import * as props from './demo/hello';

// import {name, surname} from './demo/hello';
// import {surname} from './demo/hello';


// greeting();
// console.log(secondName);
// console.log(surname);

// console.log(props.default);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
