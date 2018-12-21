import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import LoginForm from '../components/LoginForm';

export default class LoginContainer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                    <LoginForm />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = {
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }
}
