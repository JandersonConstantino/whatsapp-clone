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
      apiKey: "AIzaSyA0VwfXr6xa8Gw1pXKIvxzhNOLxx3FfU90",
      authDomain: "whatsapp-clone-4e88d.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-4e88d.firebaseio.com",
      projectId: "whatsapp-clone-4e88d",
      storageBucket: "whatsapp-clone-4e88d.appspot.com",
      messagingSenderId: "414832193296"
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