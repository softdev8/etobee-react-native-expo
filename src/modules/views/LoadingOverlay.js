import React from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

const LoadingOverlay = ({ style, visible }) => (
    <Modal
        animationType={'fade'}
        visible={visible}
        transparent={true}>

        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <ActivityIndicator animating={true} />
            </View>
        </View>

    </Modal>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000088',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondContainer: {
        width: 80,
        height: 80,
        borderRadius: 12,
        backgroundColor: '#000000AA',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoadingOverlay