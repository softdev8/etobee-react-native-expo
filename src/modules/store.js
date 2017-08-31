import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducers from './reducers'
import RestClient from './services/RestClient'
import screens from './screen/navigator/Screens'

const api = new RestClient()

export default createStore(
    rootReducers,
    getMiddleWares()
)

function getMiddleWares() {
    const middlewares = [thunk.withExtraArgument({
        api: api,
        screens: screens
    })]

    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    return applyMiddleware(...middlewares)
}