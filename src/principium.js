import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Provider} from 'react-redux';
import configureStore from './lib/configureStore';
import App from './containers/App';
import { setPlatform, setVersion } from './actions/Device';

function getInitialState () {
  const _initalState = {

  }
  return _initalState
}

import packageInformation from '../package'
const VERSION = packageInformation.version

export default function native (platform) {
  class Principium extends Component {
    render() {
      const store = configureStore(getInitialState())
      store.dispatch(setPlatform(platform))
      store.dispatch(setVersion(VERSION))

      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('principium', () => Principium)

}
