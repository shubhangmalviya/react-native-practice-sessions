import React, { Component } from 'react'
import {TextInput, View, Button, Text} from 'react-native'
import { connect } from 'react-redux'
import {performLogin, onTextChange} from '../../../state/action/Action'

export class LoginView extends Component {

    componentWillUpdate() {
        if (this.props.isSubmitted) {
            alert(JSON.stringify(this.props.successPayload));
        }
    }


    render() {
        return (
            <View style={{flex:1,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'stretch'}}>
                <Text>
                    {this.props.isSubmitted}
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
const screen = "Login";

const mapStateToProps = (state) => {
    let textChangeReducer = state.textChangeReducer[screen];
    let formSubmitReducer = state.formSubmitReducer[screen];
    return {
    username: textChangeReducer !== undefined ? textChangeReducer.username : "",
    password: textChangeReducer !== undefined ? textChangeReducer.password : "",
    isLoading: formSubmitReducer !== undefined ? formSubmitReducer.isLoading : false,
    isSubmitted: formSubmitReducer !== undefined ? formSubmitReducer.isSubmitted : false,
    error: formSubmitReducer !== undefined ? formSubmitReducer.error : undefined,
    successPayload: formSubmitReducer !== undefined ? formSubmitReducer.payload: undefined
}};

const mapDispatchToProps = (dispatch) => {

    return {
        performLogin:
            (userName, password) =>
                dispatch(performLogin(userName,password)),
        onTextChange: (property, text) => dispatch(onTextChange(property, screen, text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);