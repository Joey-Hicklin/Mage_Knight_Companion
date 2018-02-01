// REACT
import React, { Component } from 'react';
  // components
  import Router from './components/router.js';


// REDUX
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import allReducers from './store/reducers';


/////---- REDUX STORE CONFIGURE ----\\\\\

const composeEnhancers = composeWithDevTools({
  realtime: true
});

function configureStore(initialState){
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );
  return createStore(allReducers, initialState, enhancer);
}

const store = configureStore({});



/////---- COMPONENT ----\\\\\

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
