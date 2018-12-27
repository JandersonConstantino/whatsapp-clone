import React from 'react';
import { createStore } from 'redux'
import {
  Provider
} from 'react-redux'

import Routes from './src/routes';
import Reducers from './src/reducers'

export default props => (
  <Provider store={createStore(Reducers)}>
    <Routes />
  </Provider>
)