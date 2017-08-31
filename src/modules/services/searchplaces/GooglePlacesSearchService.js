import { request as googleRequest } from '@utils/GooglePlace'
import { requestNearby as googleRequestNearby } from '@utils/GooglePlace'
import { showError } from '../modal'

const initialState = {
    longitude: 0,
    latitude: 0,
    searchedPlaces: [],
    isLoading: false,
}

const Types = {
    REQUEST_START: 'GOOGLEPLACES/RequestStart',
    REQUEST_FINISHED: 'GOOGLEPLACES/RequestFinished',
    SAVEADDRESS: 'GOOGLEPLACES/AddressSaved',
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case Types.REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case Types.REQUEST_FINISHED:
            return {
                ...state,
                isLoading: false,
                searchedPlaces: action.value,
                error: action.error
            }
        case Types.SAVEADDRESS:
            return {
                ...state,
                searchedPlaces: action.value
            }
        default:
            return state
    }
}

export function showRequestStart() {
    return {
        type: Types.REQUEST_START,
    }
}

export function showRequestSuccess(results) {
    return {
        type: Types.REQUEST_FINISHED,
        value: results
    }
}

export function showRequestNearbySuccess(results) {
    return {
        type: Types.REQUEST_FINISHED,
        value: results
    }
}

export function showRequestError(error) {
    return {
        type: Types.REQUEST_FINISHED,
        error: error,
    }
}

export function savedAddress(value) {
    return {
        type: Types.SAVEADDRESS,
        value: value
    }
}

export function setSaveAddress(i, placeArray) {
    return (dispatch) => {
        const newArray = placeArray.slice();
        newArray[i].star = !newArray[i].star;
        dispatch(savedAddress(newArray))
    }
}

export function placesRequest(text) {
    return (dispatch) => {
        dispatch(showRequestStart())
        googleRequest(text)
            .then(res => {
                const _results = []
                res.map((data, counter)=>{
                    _results.push({place: data.description, place_id: data.place_id, star: false})
                })

                dispatch(showRequestSuccess(_results))
            })
            .catch(error => {
                console.log('Google Places Error', error)
                dispatch(showRequestError(error))
                dispatch(showError(error))
            })
    }
}

export function nearbyRequest(latitude, longitude) {
    return (dispatch) => {
        dispatch(showRequestStart())
        googleRequestNearby(latitude, longitude)
            .then(res => {
                const _results = []
                res.map((data, counter)=>{
                    if ( counter < 10)  //10 from nearest place
                        _results.push({place: data.name, place_id: data.place_id, star: false})
                })
                dispatch(showRequestNearbySuccess(_results))
            })
            .catch(error => {
                console.log('Google Nearby Error', error)
                dispatch(showRequestError(error))
                dispatch(showError(error))
            })
    }
}

