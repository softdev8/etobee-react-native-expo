import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import store from '../store'
import { connect, Provider } from 'react-redux'
import AppNavigator from './navigator'

EStyleSheet.build({
    $dark_sky_blue: '#2d82e5',
    $dark_sky_blue_trans: '#2d82e588',
    $black: '#000',
    $grape: '#592866',
    $frog_green: '#6fcc0a',
    $squash: '#f1a01b',
    $pink_purple: '#c852e0',
    $coral_pink: '#ff5a60',
    $white_two: '#ebebeb',
    $white: '#fff',
    $bg: '#ECECEC',
    $transparent: '#00000000'
});

const mapStateToProps = state => ({
    nav: state.nav
})

const AppNavigatorWithState = connect(mapStateToProps)(AppNavigator)

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigatorWithState />
            </Provider>
        )
    }
}

export default Root


