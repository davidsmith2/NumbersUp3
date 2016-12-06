import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './app/store';
import {AppContainer} from './app/native/container';

if (typeof global.self === 'undefined') {
  global.self = global;
}

class NumbersUp3 extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NumbersUp3', () => NumbersUp3);
