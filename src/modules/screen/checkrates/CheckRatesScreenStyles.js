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
    address: {
        borderBottomColor: '$dark_sky_blue',
        borderBottomWidth: 1,
        marginTop: 15,
        width: 320
    },
    weightView: {       
        marginTop: 30,
        width: 320,

    },
    note: {
        fontSize: 10,
        color: 'black',
        opacity: 0.5
    },
    fromname: {
        fontSize: 16
    },
    weight: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        paddingTop: 10,
        justifyContent: 'center'
    },
    pluminbutton: {
        width: 40,
        height: 40
    },
    weightlabel :{
        width: 124,
        height: 60,
        borderWidth: 1,
        borderColor: '$dark_sky_blue',
        borderRadius: 11,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    kilogram:{
        position: 'absolute', right: 28, bottom:18, opacity: 0.5
    },
    weightnote: {
        fontSize: 10,
        fontStyle: 'italic',
        opacity: 0.5,
        marginTop: 10,
        alignSelf: 'center'
    },
    gotoHarga: {
        width: Dimensions.get('window').width,
        height: 48,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '$dark_sky_blue',
        justifyContent: 'center',
        alignItems: 'center'
    },

})