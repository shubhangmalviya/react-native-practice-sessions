import React, { Component } from 'react'
import {TextInput, View, Button, Text} from 'react-native'
import { connect } from 'react-redux'
import {performLogin, onTextChange} from './Action'

export class LoginView extends Component {

    render() {
        return (
            <View style={{flex:1,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'stretch'}}>
                <Text>
                    {this.props.isLoginSuccess}
                </Text>
                <TextInput placeholder={'username'}
                           onChangeText={(username) => this.props.onTextChange('username', username)}/>
                <TextInput placeholder={'password'}
                           onChangeText={(password) => this.props.onTextChange('password', password)}/>
                <Button title={'login'}
                        onPress={this.onPressLogin.bind(this, this.props.username, this.props.password)} />
            </View>
        );
    }

    onPressLogin = (username, password) => {
        this.props.performLogin(username, password);
    };
}

const mapStateToProps = (state) => {
    return {
    username: state.LoginReducer.username,
    password: state.LoginReducer.password,
    isLoading: state.LoginReducer.isLoading,
    isLoginSuccess: state.LoginReducer.isLoginSuccess,
    error: state.LoginReducer.error
}};

const mapDispatchToProps = (dispatch) => {
    return {
        performLogin:
            (userName, password) =>
                dispatch(performLogin(userName,password)),
        onTextChange: (property, text) => dispatch(onTextChange(property, text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);