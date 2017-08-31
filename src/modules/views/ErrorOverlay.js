import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'
import { removeError } from '../services/modal'

const ErrorOverlay = ({ style, visible, error, action, close }) => (
    <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: '#00000088' }}>
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Text style={styles.text}>
                    {error ? error.message : ""}
                </Text>
                <Button
                    title={"OK"}
                    onPress={
                        action
                            ? () => action()
                            : () => close()
                    } />
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000088'
    },
    secondContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 12,
        backgroundColor: '$bg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch(removeError())
    }
}

export default connect(() => ({}), mapDispatchToProps)(ErrorOverlay)