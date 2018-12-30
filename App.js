import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import {
  Provider
} from 'react-redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Routes from './src/routes';
import Reducers from './src/reducers'

export default class App extends React.Component {

  componentWillMount() {
    let config = {
      apiKey: "AIzaSyDYh6nJAloKq-fZ9_16urv-WkgMIc90A2o",
      authDomain: "curso-react-native-c850b.firebaseapp.com",
      databaseURL: "https://curso-react-native-c850b.firebaseio.com",
      projectId: "curso-react-native-c850b",
      storageBucket: "curso-react-native-c850b.appspot.com",
      messagingSenderId: "111802462574"
    }
    firebase.initializeApp(config)
  }

  render() {



    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    )
  }
}