import React from 'react'
import { addNavigationHelpers } from 'react-navigation';

/* Navigator */
import AppNavigator from './AppNavigator'

/* Screens Key */
import Screens from './Screens'

const router = AppNavigator.router
const getStateForScreen = (screenName, state) =>
    router.getStateForAction(router.getActionForPathAndParams(screenName), state)

const initialState = getStateForScreen(Screens.HOME)

export function reducer(state = initialState, action) {
    return createNextstate(state, action) || state;
}

function createNextstate(state, action) {
    switch (action.type) {
        case Screens.HOME:
            return getStateForScreen(Screens.HOME)
        case Screens.FORGOT_PASSWORD:
            return getStateForScreen(Screens.FORGOT_PASSWORD, state)
        default:
            return router.getStateForAction(action, state);
    }
}

export default function navigator(props) {
    const { dispatch, nav } = props
    return (
        <AppNavigator navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav,
        })} />
    )
}