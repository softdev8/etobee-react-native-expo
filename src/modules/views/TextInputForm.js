import React, { PropTypes } from 'react'
import { View, TouchableOpacity } from 'react-native'
import TextInputMaterial from './TextInputMaterial'
import ImageButton from './ImageButton'
import StyleSheet from 'react-native-extended-stylesheet'
import icons from '@assets/icons'

class TextInputForm extends React.Component {

    static proptypes = {
        placeholder: PropTypes.string.isRequired,
        onChangeText: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            showClear: false,
            togglePassword: props.isPassword
        }
    }

    clearTextField = () => {
        this._textInput.setNativeProps({ text: '' });
    }

    showClearButton = (text) => {
        const isShow = text ? true : false
        this.setState({
            showClear: isShow
        })
    }

    toggleShowPassword = () => {
        this.setState({
            togglePassword: !this.state.togglePassword
        })
    }

    getImageButton() {
        const { isPassword } = this.props
        const { togglePassword } = this.state

        const eyeImage = togglePassword
            ? icons.loginEyeDefault
            : icons.loginEyeActive

        return (
            <ImageButton
                src={isPassword ? eyeImage : icons.clear}
                imageStyle={styles.clearButtonImage}
                buttonStyle={styles.clearButton}
                action={this.toggleShowPassword}
            />
        )
    }

    render() {
        const { style, onChangeText, placeholder, isPassword } = this.props
        const { showClear, togglePassword } = this.state
        return (
            <View style={[styles.container, style]}>
                <TextInputMaterial
                    secureTextEntry={isPassword && togglePassword}
                    style={styles.textfield}
                    placeholder={placeholder}
                    onChangeText={(text) => {
                        onChangeText(text)
                        this.showClearButton(text)
                    }}
                />
                {showClear
                    ? this.getImageButton()
                    : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50
    },
    clearButtonImage: {
        width: 24,
        height: 24
    },
    clearButton: {
        position: 'absolute',
        right: 0,
        top: 12
    },
    textfield: {
        height: 50,
        paddingRight: 32
    }
})

export default TextInputForm