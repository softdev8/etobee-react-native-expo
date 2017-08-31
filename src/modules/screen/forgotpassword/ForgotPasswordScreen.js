import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { StatusBar, TextInputForm, LoadingOverlay } from '@views'
import { ForgotPasswordHeader } from './components'
import StyleSheet from 'react-native-extended-stylesheet'

import { requestForgotPassword } from '../../services/forgotpassword/ForgotPasswordService'

class ForgotPasswordScreen extends React.Component {

    state = {
        emailOrPhone: ""
    }

    render() {
        const { forgotPassword, isLoading, navigation } = this.props
        const { emailOrPhone } = this.state

        const popBack = () => navigation.goBack()

        return (
            <View style={styles.container}>
                <LoadingOverlay visible={isLoading} />
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#CCC'
                }}>
                    <ForgotPasswordHeader
                        action={popBack}
                        style={styles.header} />
                </View>
                <Text style={styles.text}>
                    {"Jangan khawatir, beri kami nomor telepon atau email Anda sehingga kami bisa mengirimkan kata sandi sementara kepada anda."}
                </Text>
                <TextInputForm
                    style={styles.editText}
                    placeholder={"Email/Nomor Telepon"}
                    onChangeText={(text) => this.setState({ emailOrPhone: text })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => forgotPassword(emailOrPhone)}>
                    <Text style={styles.buttonText}>
                        {"Reset Kata Sandi"}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '$bg'
    },
    header: {
        height: 160,
    },
    button: {
        height: 48,
        borderRadius: 100,
        backgroundColor: '$dark_sky_blue',
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        width: 134,
        height: 19,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.44,
        textAlign: "center",
        color: '$white'
    },
    editText: {
        margin: 20,
        marginTop: 25
    },
    text: {
        width: '100%',
        height: 60,
        opacity: 0.5,
        fontSize: 14,
        lineHeight: 20.0,
        textAlign: "center",
        color: '$black',
        marginTop: 20
    }
})

const mapStateToProps = state => {
    return state.forgotPassword
}

const mapDispatchToProps = dispatch => {
    return {
        forgotPassword: (emailOrPhone) => dispatch(requestForgotPassword(emailOrPhone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen)
