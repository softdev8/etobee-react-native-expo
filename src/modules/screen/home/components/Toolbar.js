import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native'
import { ImageButton } from '@views'
import icons from '@assets/icons'
import EStyleSheet from 'react-native-extended-stylesheet'

class Toolbar extends React.Component {
    render() {
        const { user } = this.props
        return (
            <View style={styles.container}>
                <ImageButton
                    src={icons.menu}
                    imageStyle={styles.iconMenu}
                />
                <Text style={styles.text}>
                    Selamat Datang, {user}!
                </Text>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: { 
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    iconMenu: {
        width: 24,
        height: 24,
        marginRight: 16
    },
    text: {
        height: 16,
        fontSize: 14,
        letterSpacing: 0.56,
        color: '$black'
    }
})

export default Toolbar