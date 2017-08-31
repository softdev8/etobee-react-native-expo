const Types = {
    FORGOT_PASSWORD_REQUEST: 'ForgotPassword/ForgotPasswordRequest',
    FORGOT_PASSWORD_ERROR: 'ForgotPassword/ForgotPasswordError',
    FORGOT_PASSWORD_COMPLETED: 'ForgotPassword/ForgotPasswordCompleted'
}

const initialState = {
    isLoading: false,
    successMessage: '',
    error: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Types.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Types.FORGOT_PASSWORD_COMPLETED:
            return {
                ...state,
                isLoading: false,
                successMessage: action.message,
            }
        case Types.FORGOT_PASSWORD_COMPLETED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export function showLoading() {
    return {
        type: Types.FORGOT_PASSWORD_REQUEST
    }
}

export function showError(error) {
    return {
        type: Types.FORGOT_PASSWORD_COMPLETED,
        error: error
    }
}

export function showResult(successMessage) {
    return {
        type: Types.FORGOT_PASSWORD_COMPLETED,
        message: successMessage
    }
}

export function requestForgotPassword(emailOrPhone) {
    return (dispatch, getState, { api, screens }) => {
        dispatch(showLoading())

        api.forgotPassword(emailOrPhone)
            .then(data => {
                dispatch(showResult(data.message))
            })
            .catch(error => {
                dispatch(showError(error))
            })
    }
}
