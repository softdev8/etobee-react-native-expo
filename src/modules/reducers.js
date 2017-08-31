import { reducer as nav } from './screen/navigator'
import homeReducer from './services/home/HomeServices'
import authReducer from './services/auth/AuthService'
import rate from './services/checkrates/checkratesService'
import modal from './services/modal'
import forgotPassword from './services/forgotpassword/ForgotPasswordService'
import places from './services/searchplaces/GooglePlacesSearchService'

import { combineReducers } from 'redux'

export default combineReducers({
    nav,
    homeReducer,
    authReducer,
    rate,   
    modal,
    forgotPassword,
    places,
})
