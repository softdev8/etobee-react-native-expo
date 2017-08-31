import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'
import icons from '@assets/icons'

const CreateOrderButton = ({ action }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={action}>
        <Image
            style={styles.image}
            source={icons.homeRoundPlus}
        />
        <View style={styles.verticalDivider} />
        <Text style={styles.text}>Kirim Barang</Text>
        <Image
            source={icons.arrowOpen}
            style={styles.arrow}
        />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 100,
        borderRadius: 12,
        backgroundColor: '$coral_pink',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        width: 186,
        height: 24,
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24.0,
        letterSpacing: 0.79,
        marginLeft: 20,
        color: '$white'
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 20,
        marginRight: 20
    },
    arrow: {
        width: 24,
        height: 24
    },
    verticalDivider: {
        width: 1,
        height: 60,
        opacity: 0.25,
        backgroundColor: '$white'
    }
})

export default CreateOrderButton