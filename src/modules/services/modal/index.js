const Types = {
    SHOW_ERROR: 'Modal/ShowError',
    REMOVE_ERROR: 'Modal/RemoveError'
}

const initialState = {
    error: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Types.SHOW_ERROR:
            return {
                ...state,
                error: action.error
            }
        case Types.REMOVE_ERROR:
            return {
                error: null
            }
        default:
            return state
    }
}

export function showError(error) {
    return {
        type: Types.SHOW_ERROR,
        error: error
    }
}

export function removeError() {
    return {
        type: Types.REMOVE_ERROR
    }
}

