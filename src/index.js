import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Counter from './demo/Counter';
import * as serviceWorker from './serviceWorker';
// import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
// import {history} from './history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<Router history={history}>
        <App />
</Router>*/}
<BrowserRouter>
<App />
</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
