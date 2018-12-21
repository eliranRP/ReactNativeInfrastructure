import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { FormComponent, Spinner } from '../../../Components/common'
import { Button } from 'react-native-elements'
import { emailChanged, passwordChanged, signInOrLogin } from '../actions/AuthActions'

class LoginForm extends Component {

    _onEmailChange(text) {
        this.props.emailChanged(text);
    }

    _onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    _onSignIn() {
        const { email, password } = this.props;
        this.props.signInOrLogin({ email, password });
    }

    _renderButton() {
        if (this.props.loading) {
            return (
                <View style={styles.spinner}>
                    <Spinner size="large" />
                </View>
            );
        }

        return (
            <Button
                buttonStyle={styles.submit}
                title='Login'
                onPress={this._onSignIn.bind(this)} />
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <FormComponent
                    label='Email'
                    placeholder='email@gmail.com'
                    value={this.props.email}
                    onChangeText={(value) => this._onEmailChange(value)}
                    error={false}
                    autoCorrect={false}
                    errorMessage='someError'
                />
                <FormComponent
                    label='Password'
                    placeholder='password'
                    value={this.props.password}
                    onChangeText={(value) => this._onPasswordChange(value)}
                    error={false}
                    autoCorrect={false}
                    errorMessage='someError'
                    secureTextEntry={true}
                />

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                {this._renderButton()}
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    submitContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    submit: {
        marginTop: 50,
        borderRadius: 5,
        backgroundColor: '#0095fb',
    },
    spinner: {
        marginTop: 50,
    },
    errorTextStyle: {
        fontSize: 13,
        alignSelf: 'center',
        color: 'red'
    }


}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, signInOrLogin
})(LoginForm);
