import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import LoginView from './app/user/account/login/LoginView'

import configureStore from './app/state/store/configureStore'

let store = configureStore();

export default class ReactTestPrototype extends Component {
  render() {
    return (
       <Provider store={store} >
            <LoginView/>
       </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactTestPrototype',
                                () => ReactTestPrototype);
