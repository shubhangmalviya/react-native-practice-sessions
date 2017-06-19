import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import {LoginReducer} from './app/user/account/login/LoginReducer'

import LoginView from './app/user/account/login/LoginView'

let store = createStore(LoginReducer);

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
