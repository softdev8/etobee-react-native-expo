import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

const PromoButton = ({ action, image, style }) => (
    <TouchableOpacity
        onPress={action}
        style={[styles.button, style]}>

        <Image source={image} />

    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        width: 165,
        height: 165,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$squash'
    }
})

export default PromoButton