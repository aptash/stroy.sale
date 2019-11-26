import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer, { IReduxState } from './reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { logger } from 'redux-logger';

const initialState: IReduxState = {
  isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')),
  jwt: localStorage.getItem('jwt') || '',
  data: [],
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
