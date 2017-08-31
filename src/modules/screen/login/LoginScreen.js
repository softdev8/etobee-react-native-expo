import _ from 'lodash'
import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import StyleSheet from 'react-native-extended-stylesheet'

import icons from '@assets/icons'
import Screens from '@navigator/Screens'
import { LoginToolbar, LoginForm } from './components'
import {
    StatusBar,
    FacebookButton,
    LoadingOverlay,
    ErrorOverlay
} from '@views'

import { login, loginWithFacebook } from '../../services/auth/AuthService'

const height = Dimensions.get('window').height

class LoginScreen extends React.Component {

    state = {}

    showError() {
        const { error } = this.props
        const isShowError = !_.isEmpty(error)
        return (isShowError
            ? <ErrorOverlay
                visible={isShowError}
                error={error} />
            : null
        )
    }

    render() {
        const { login, loginWithFacebook, isLoading, error, navigation } = this.props
        const { username, password } = this.state
        const isEnabled = !_.isEmpty(username) && !_.isEmpty(password)

        const navigateToForgotPassword = () => navigation.dispatch({ type: Screens.FORGOT_PASSWORD })

        return (
            <View style={styles.bg}>
                <LoadingOverlay visible={isLoading} />
                <Image
                    source={icons.bg}
                    style={styles.imageBg}
                />
                <StatusBar />
                <LoginToolbar />
                <FacebookButton
                    text={"Login dengan Facebook"}
                    style={styles.facebookButton}
                    action={loginWithFacebook}
                />
                <Text style={styles.or}>OR</Text>
                <LoginForm
                    style={styles.loginForm}
                    onDataChange={(obj) => this.setState(obj)}
                />
                <TouchableOpacity
                    style={{ alignItems: 'flex-end', paddingRight: 20 }}
                    onPress={navigateToForgotPassword}>
                    <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                    <TouchableOpacity
                        disabled={!isEnabled}
                        style={isEnabled
                            ? styles.loginButton
                            : styles.loginButtonDisabled
                        }
                        onPress={() => {
                            const { username, password } = this.state
                            login(username, password)
                        }}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={bottomStyle.bottomContainer}>
                        <Text style={[bottomStyle.transparent, bottomStyle.textAccount]}>
                            Tidak Memiliki Akun?
                         </Text>
                        <Text style={[bottomStyle.transparent, bottomStyle.textSignUp]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                {this.showError()}
            </View>
        )
    }
}

const bottomStyle = StyleSheet.create({
    bottomContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transparent: {
        backgroundColor: '#00000000'
    },
    textAccount: {
        color: '#0000007f',
        marginRight: 4
    },
    textSignUp: {
        color: '$black',
        textDecorationLine: 'underline'
    }
})

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '$bg',
        flex: 1
    },
    imageBg: {
        width: '100%',
        height: 640,
        position: 'absolute',
        bottom: 0,
    },
    facebookButton: {
        marginTop: 22,
        alignSelf: 'center'
    },
    or: {
        height: 14,
        fontSize: 12,
        opacity: 0.50,
        marginTop: 10,
        fontWeight: '600',
        letterSpacing: 0.33,
        textAlign: 'center',
        color: '$black'
    },
    loginForm: {
    },
    forgotPassword: {
        height: 48,
        opacity: 0.5,
        fontSize: 12,
        lineHeight: 48.0,
        letterSpacing: 0.33,
        textAlign: "right",
        color: '$black'
    },
    loginButton: {
        height: 48,
        backgroundColor: '$dark_sky_blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonDisabled: {
        height: 48,
        backgroundColor: '$dark_sky_blue_trans',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.44,
        color: '$white'
    }
})

const mapStateToProps = state => {
    const { authReducer, modal } = state
    return {
        ...authReducer,
        ...modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password)),
        loginWithFacebook: () => dispatch(loginWithFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)