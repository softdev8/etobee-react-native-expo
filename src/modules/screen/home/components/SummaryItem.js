import React, { PropTypes } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

const SummaryItem = ({ count, icon, text, style }) => (
    <View style={style}>
        <Text style={styles.counter}>
            {count}
        </Text>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={icon}
                style={styles.image}
            />
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    </View>
)

SummaryItem.proptypes = {
    counter: PropTypes.number.isRequired,
    icon: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    text: {
        width: 66,
        height: 28,
        opacity: 0.5,
        fontSize: 12,
        fontWeight: "600",
        letterSpacing: 0.48,
        color: '$black'
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    counter: {
        width: 19,
        height: 30,
        opacity: 0.25,
        fontSize: 28,
        lineHeight: 30.0,
        letterSpacing: 1.11,
        color: '$black'
    }
})

export default SummaryItem