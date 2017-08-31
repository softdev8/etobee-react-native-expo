import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Screens from '../navigator/Screens'

import EStyleSheet from 'react-native-extended-stylesheet'
import icons from '@assets/icons'

import Toolbar from './components/Toolbar'
import SummaryBar from './components/SummaryBar'
import HomeButonn from './components/HomeButton'
import PromoButton from './components/PromoButton'
import CreateOrderButton from './components/CreateOrderButton'

import { fetchSummary } from '../../services/home/HomeServices'

class HomeScreen extends React.Component {

    render() {
        const { loadSummary, navCheckRates } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <SummaryBar {... this.props.summary} />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <CreateOrderButton />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <HomeButonn
                            action={navCheckRates}
                            icon={icons.homeRates}
                            text={"Cek Harga"}
                            style={styles.checkRates}
                        />
                        <HomeButonn
                            icon={icons.homeMyOrder}
                            text={"Pengiriman Saya"}
                            style={styles.myOrder}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <PromoButton
                            image={icons.menu}
                            style={styles.promoButton}
                        />
                        <HomeButonn
                            icon={icons.homeTracking}
                            text={"Lacak Pengiriman"}
                            style={styles.trackingButton}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '$squash'
    },
    checkRates: {
        marginRight: 5,
        backgroundColor: '$frog_green'
    },
    myOrder: {
        marginLeft: 5,
        backgroundColor: '$squash'
    },
    trackingButton: {
        marginLeft: 5,
        backgroundColor: '$dark_sky_blue'
    },
    promoButton: {
        marginRight: 5
    },
    scrollView: {
        paddingVertical: 10,
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return state.homeReducer
}

const mapDispatchToProps = dispatch => {
    return {
        loadSummary: () => {
            dispatch(fetchSummary())
        },
        navCheckRates: () => {
            dispatch(NavigationActions.navigate({ routeName: Screens.CHECK_RATES }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)