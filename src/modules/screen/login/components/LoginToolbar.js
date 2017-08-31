import React from 'react'
import { View, Image, Text } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'
import { ImageButton } from '@views'
import icons from '@assets/icons'

const LoginToolbar = ({ style, action }) => (
    <View>
        <View style={styles.container}>
            <ImageButton
                imageStyle={styles.imageButton}
                buttonStyle={styles.button}
                src={icons.close}
            />
            <Image
                source={icons.loginLogoMedium}
                style={styles.logo}
            />
        </View>
        <View>
            <Text style={styles.text}>Login</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },
    imageButton: {
        width: 24,
        height: 24,
    },
    button: {
        marginTop: 16,
        marginLeft: 20,
        position: 'absolute',
        left: 0
    },
    logo: {
        width: 30,
        height: 30,
        alignSelf: 'auto'
    },
    text: {
        height: 40,
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 40.0,
        letterSpacing: 0.67,
        textAlign: 'center',
        color: '$black', 
        backgroundColor: '$transparent'
    }
})

export default LoginToolbar