import { StackNavigator } from 'react-navigation'

/* Screens */
import LoginScreen from '../login/LoginScreen'
import HomeScreen from '../home/HomeScreen'
import CreateOrderScreen from '../createorder/CreateOrderScreen'
import CheckRatesScreen from '../checkrates/CheckRatesScreen'
import CheckRatesDetailScreen from '../checkrates/CheckRatesDetailScreen'
import ForgotPasswordScreen from '../forgotpassword/ForgotPasswordScreen'

/* Screens Key */
import Screens from './Screens'

const config = {
    [Screens.LOGIN]: { screen: LoginScreen },
    [Screens.HOME]: { screen: HomeScreen },
    [Screens.CREATE_ORDER]: { screen: CreateOrderScreen },
    [Screens.CHECK_RATES]: { screen: CheckRatesScreen },
    [Screens.CHECK_RATES_DETAIL]: { screen: CheckRatesDetailScreen },
    [Screens.FORGOT_PASSWORD]: { screen: ForgotPasswordScreen }
}

const AppNavigator = StackNavigator(config, { headerMode: 'none' });

export default AppNavigator