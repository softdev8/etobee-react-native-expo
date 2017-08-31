import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'
import icons from '@assets/icons'

const FacebookButton = ({ style, text, action }) => (
    <TouchableOpacity
        style={[styles.button, style]}
        onPress={action}>
        <Image
            source={icons.loginFacebook}
            style={styles.image}
        />
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24
    },
    button: {
        width: 320,
        height: 48,
        borderRadius: 100,
        backgroundColor: '#3f51b5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        marginLeft: 12.5,
        width: 208,
        height: 19,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.44,
        textAlign: "center",
        color: '$white'
    }
})

export default FacebookButton 