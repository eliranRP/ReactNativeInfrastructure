import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/Reducers'
import Router from './Router'
import firebase from "firebase"
import ReduxThunk from 'redux-thunk';

console.disableYellowBox = true;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAkzfrezmNj4Dw96BcVgkxoURHwVvCjuQE",
      authDomain: "dylan-aa036.firebaseapp.com",
      databaseURL: "https://dylan-aa036.firebaseio.com",
      projectId: "dylan-aa036",
      storageBucket: "dylan-aa036.appspot.com",
      messagingSenderId: "560864946950"
    };
    firebase.initializeApp(config);
  }


  render() {    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
