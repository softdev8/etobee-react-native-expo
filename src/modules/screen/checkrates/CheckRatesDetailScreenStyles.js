import { Dimensions } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

export default StyleSheet.create({
    container: {
        backgroundColor: '$white_two',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    ribbon: {
        width:340,
        height: 38,
        marginTop: 10,
        alignSelf: 'center'
    },  
    nonSelAddress: {
        flexDirection: 'row',
        marginTop: 10,
        width: 200
    },
    noneAddress: {
        fontSize: 14
    },
    nonSelNote: {
        right: 10,
        width: 55,
        opacity: 0.5
    },
    selDuration: {
        borderTopColor: '#AAAAAA',
        borderTopWidth: 1,
        marginTop: 15,
        width: 320
    },
    icon: {
        width: 30,
        height: 30
    },
    currency: {
        color: '$dark_sky_blue'
    },
    rateSelType: {
        backgroundColor: '$white',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '$dark_sky_blue'
    },
    rateNoneSelType: {
        backgroundColor: '$white',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        opacity: 0.5
    },
    rateView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }, 
    rateNote: {
        fontStyle: 'italic',
        textAlign: 'center',
        opacity: 0.5},
    sendNow: {
        width: 320,
        height: 48,
        marginTop: 20,
        backgroundColor: '#ff5a60',
        justifyContent: 'center',
        borderRadius: 100,
        alignItems: 'center'
    }

})