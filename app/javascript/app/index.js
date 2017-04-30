import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// Routes
import Routes from './routes/';

// Reducers
import RootReducers from './reducers/';

// configure Redux extension
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CHROME__ || compose;

// default store
// const storeWithMiddlewares = applyMiddleware(
//   ReduxThunk
// )(createStore);
// export const store = storeWithMiddlewares(RootReducers);
export const store = createStore(RootReducers, {}, componseEnhancers(
  applyMiddleware(ReduxThunk)
));

// for debuggin
// window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      { Routes }
    </Provider>
    , document.getElementById('app')
  );
});