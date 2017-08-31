const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const FROMADDRESS = 'FROMADDRESS'
const SENDADDRESS = 'SENDADDRESS'
const WHERE = 'WHERE'

const initialState = {
    count: 0,
    where: false,
    fromlocation: "",
    sendlocation: ""
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case INCREMENT:
            return {
              ...state,
              count: state.count < 20 ? state.count + 1 : state.count
            }
        case DECREMENT:
            return {
              ...state,
              count: state.count > 0 ? state.count - 1 : state.count
            }
        case FROMADDRESS:
            return {
                ...state,
                fromlocation: action.address
            }
        case SENDADDRESS:
            return{
                ...state,
                sendlocation: action.address
            }
        case WHERE:
            return{
                ...state,
                where: action.where
            }
        default:
            return state;
    }
}

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
     }
}

export function setFromAddress(address) {
    return {
        type: FROMADDRESS,
        address: address
    }
}

export function setSendAddress(address) {
    return {
        type: SENDADDRESS,
        address: address
    }
}

