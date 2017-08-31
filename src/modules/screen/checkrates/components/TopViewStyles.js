import StyleSheet from 'react-native-extended-stylesheet'
import{ Dimensions } from 'react-native'

export default StyleSheet.create({
    CheckRateHeader: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/4,
        alignItems: 'center'
    },
    icon_rates: {
        width: 60,
        height: 60,
        marginBottom: 18,
        marginTop: 44
    },
    backbutton: {
        position: 'absolute',
        left: 20,
        top: 40
    },
    headertext: {
        color: 'white',
        fontSize: 14,
        backgroundColor: 'transparent'
    },
})