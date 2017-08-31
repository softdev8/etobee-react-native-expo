const SUMMARY_REQUEST = 'Home/SummaryRequest'
const SUMMARY_FETCHED = 'Home/SummaryFetched'
const SUMMARY_FETCH_ERROR = 'Home/SummaryFetchError'

const initialState = {
    summary: {
        onProgress: 0,
        delivered: 0,
        problems: 0
    },
    isLoading: false,
    isError: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case SUMMARY_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case SUMMARY_FETCHED:
            return {
                isLoading: false,
                isError: false,
                summary: action.json
            }
        case SUMMARY_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export function showLoading() {
    return {
        type: SUMMARY_REQUEST
    }
}

export function showContent(summary) {
    return {
        type: SUMMARY_FETCHED,
        summary: summary
    }
}

export function showError(error) {
    return {
        type: SUMMARY_FETCH_ERROR,
        error: error
    }
}

export function fetchSummary() {
    return (dispatch, getState, { api }) => {

        dispatch(showLoading())

        api.fetchSummary()
            .then(json => dispatch(showContent(json)))
            .catch(error => dispatch(showError(error)))
    }
}