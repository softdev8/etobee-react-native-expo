import { Dimensions } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

export default StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: '$white',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    backbutton: {
        position: 'absolute',
        left: 20,
        top: 40
    },
    textInputParent: {
        flexDirection : 'row',
        marginTop: 40
    },
    listcontainer: {
        marginTop: 20,
        width: Dimensions.get('window').width
    },
    closeImage : {
        marginTop: 6,
        marginLeft: 20,
        width: 24, 
        height: 24
    },
    separator : {
        backgroundColor: '$black',
        marginTop: 10,
        width: Dimensions.get('window').width,
        height: 1,
        opacity: 0.4
    },
    scrollcontainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    rowcontainer: {
        width: Dimensions.get('window').width - 40,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,

    },
    address: {
        width: 280,
    }, 
    star: {
        position: 'absolute',
        right: 0,
        width: 24,
        height: 24,
    },
    textInput: {
        width : Dimensions.get('window').width - 100,
        marginTop: 6,
        marginLeft: 20,
        height : 24,
        lineHeight : 24,
        fontWeight : 'normal',
        fontSize: 16,
    },  
    clearImage : {
        marginTop: 6,
        marginRight: 10,
        width: 24, 
        height: 24
    },
    clearEmptyImage : {
        marginTop: 6,
        marginRight: 10,
        width: 24, 
        height: 24,
        opacity: 0
    },  
})