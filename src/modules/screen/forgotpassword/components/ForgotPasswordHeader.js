import React from 'react'
import { View, Image, Text } from 'react-native'
import { ImageButton } from '@views'
import icons from '@assets/icons'
import StyleSheet from 'react-native-extended-stylesheet'

const ForgotScreenHeader = ({ style, action }) => (
    <Image
        source={icons.topBg}
        style={[{ width: '100%' }, style]}>
        <View style={styles.container}>
            <ImageButton
                action={action}
                src={icons.iconBack}
                buttonStyle={styles.arrow}
                imageStyle={styles.imageStyle}
            />
            <Image
                source={icons.forgotPassword}
                style={{ width: 60, height: 60 }}
            />
            <Text style={styles.title} >
                {"Lupa Kata Sandi"}
            </Text>
        </View>
    </Image>
)

const styles = StyleSheet.create({
    imageStyle: {
        width: 24,
        height: 24
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 30
    },
    arrow: {
        width: 24,
        height: 24,
        marginLeft: 20,
        marginTop: 32,
        position: 'absolute',
        left: 0,
        top: 0
    },
    title: {
        height: 16,
        fontSize: 14,
        marginTop: 20,
        fontWeight: "600",
        letterSpacing: 0.56,
        textAlign: "center",
        color: '$black',
        backgroundColor: '$transparent'
    }
})

export default ForgotScreenHeader