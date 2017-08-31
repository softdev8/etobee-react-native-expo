import { login as facebookLogin } from '@utils/Facebook'
import { showError } from '../modal'

const AUTH_LOGIN = 'AuthService/Login'

const Types = {
    LOGIN_START: 'AuthService/LoginStart',
    LOGIN_FINISHED: 'AuthService/LoginFinished',
}

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    userLoggedIn: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Types.LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOGIN_FINISHED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export function showLoggingIn() {
    return {
        type: Types.LOGIN_START,
    }
}

export function showLoginError(error) {
    return {
        type: Types.LOGIN_FINISHED,
        error: error,
    }
}

export function showLoginSuccess(userLoggedIn) {
    return {
        type: Types.LOGIN_FINISHED
    }
}

export function login(username, password) {
    return (dispatch, getState, { api, screens }) => {
        dispatch(showLoggingIn())

        api.login(username, password)
            .then(data => {
                dispatch(showLoginSuccess())
                dispatch({ type: screens.HOME })
            })
            .catch(error => {
                dispatch(showLoginError(error))
                dispatch(showError(error))
            })
    }
}

export function loginWithFacebook() {
    return (dispatch, getState, { api, screens }) => {
        dispatch(showLoggingIn())
        facebookLogin()
            .then(res => {
                console.log('Facebook Response', res)
                dispatch(showLoginSuccess())
                dispatch({ type: screens.HOME })
            })
            .catch(error => {
                console.log('Facebook Error', error)
                dispatch(showLoginError(error))
            })
    }
}

