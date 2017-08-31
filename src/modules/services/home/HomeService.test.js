import reducer, {
    fetchSummary,
    showError,
    showLoading,
    showContent,
} from './HomeServices'

const initialState = {
    summary: {
        onProgress: 0,
        delivered: 0,
        problems: 0
    },
    isLoading: false,
    isError: false
}

test('Reducer return correctly', () => {
    expect(reducer()).toEqual(initialState)
    expect(reducer(initialState)).toBe(initialState)
    expect(reducer(initialState, showLoading()))
        .toEqual({
            ...initialState, isLoading: true
        })
})