import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { TextInputForm } from '@views'
import StyleSheet from 'react-native-extended-stylesheet'

class LoginForm extends React.Component {

    static propTypes = {
        onDataChange: PropTypes.func.isRequired
    }

    state = {
        username: "",
        password: ""
    }

    updateData(newState) {
        const { onDataChange } = this.props
        onDataChange({
            ...this.state,
            ...newState
        })
        this.setState(newState)
    }

    render() {
        const { style, onDataChange } = this.props
        return (
            <View style={[styles.container, style]}>
                <TextInputForm
                    placeholder={"EMAIL/NOMOR TELEPON"}
                    onChangeText={(text) => {
                        const newState = { username: text }
                        this.updateData(newState)
                    }}
                />
                <TextInputForm
                    isPassword={true}
                    style={styles.inputForm}
                    placeholder={"KATA SANDI"}
                    onChangeText={(text) => {
                        const newState = { password: text }
                        this.updateData(newState)
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    inputForm: {
        marginTop: 10
    }
})

export default LoginForm