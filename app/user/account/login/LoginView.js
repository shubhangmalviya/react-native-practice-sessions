import React, { Component } from 'react'
import {TextInput, View, Button} from 'react-native'
import { connect } from 'react-redux'

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password: ""
        };
    }

    render() {
        return (
            <View style={{flex:1,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'stretch'}}>
                <TextInput placeholder={'username'}
                           onChangeText={(username) => this.state.username = username}/>
                <TextInput placeholder={'password'}
                           onChangeText={(password) => this.state.password = password}/>
                <Button title={'login'}
                        onPress={this.onPressLogin} />
            </View>
        );
    }

    onPressLogin = () => {
        this.createSession().then((response) => {
            console.log(response + "received")
        }).catch((error) => {
            console.log(error + "received")
        });
    };

    createSession() {
        return fetch('http://192.168.1.100:3001/sessions/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then((response) => response.json());
    }
}
