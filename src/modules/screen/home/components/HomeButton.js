import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import StyleSheet from 'react-native-extended-stylesheet'
import Icons from '@assets/icons'

const HomeButton = ({ action, style, text, icon }) => (
    <TouchableOpacity
        style={[styles.button, style]}
        onPress={action}>

        <View style={styles.textContainer}>
            <Image
                style={styles.image}
                source={icon}
            />
            <Text style={styles.text}>
                {text}
            </Text>
        </View>

        <Image
            style={styles.arrow}
            source={Icons.arrowOpen}
        />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 165,
        height: 165,
        borderRadius: 12
    },
    text: {
        height: 24,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24.0,
        letterSpacing: 0.56,
        color: '$white'
    },
    image: {
        width: 40,
        height: 40
    },
    arrow: {
        width: 24,
        height: 24,
        margin: 10,
        bottom: 0,
        right: 0,
        position: 'absolute'
    }
})

export default HomeButton