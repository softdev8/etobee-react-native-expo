import React from 'react'
import {
    View,
    Image,
    Text,
    Modal,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Screens from '../navigator/Screens'

import Icons from '@assets/icons'
import TopView from './components/TopView'
import CheckAddressScreen from './CheckAddressScreen'
import styles from './CheckRatesScreenStyles'
import { 
    increment,
    decrement
} from './../../services/checkrates/checkratesService'

class CheckRatesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            stateModal: 1,
        }
    }

    render() {
        const { onClickDetail, counter, increment, decrement } = this.props

        return (
            <View style={styles.container}>
                <TopView />
                <Image
                    source={Icons.checkRibbon}
                    style={styles.ribbon} />
                <View style={styles.address}>
                    <Text style={styles.note}>DARI</Text>
                    <TouchableOpacity
                        style={{ paddingBottom: 10, paddingTop: 5 }}
                        onPress={this.toggleModal.bind(this, false)}>
                        <Text style={styles.fromname}>{ this.props.fromlocation }</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.address}>
                    <Text style={styles.note}>KE</Text>
                    <TouchableOpacity
                        style={{ paddingBottom: 10, paddingTop: 5 }} 
                        onPress={this.toggleModal.bind(this, true)}>
                        <Text style={styles.fromname}>{ this.props.sendlocation }</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.weightView}>
                    <Text style={styles.note}>PERKIRAAN BERAT</Text>
                    <View style={styles.weight}>
                        <TouchableOpacity onPress={decrement}>
                            <Image
                                source={Icons.checkRoundMinus}
                                style={styles.pluminbutton} />
                        </TouchableOpacity>
                        <View style={styles.weightlabel}>
                            <Text style={{ fontSize: 24 }}>{counter}</Text>
                            <Text style={styles.kilogram}>kg</Text>
                        </View>
                        <TouchableOpacity onPress={increment}>
                            <Image 
                                source={Icons.checkRoundPlus} 
                                style={styles.pluminbutton} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.weightnote}>Kami memberikan maksimal berat hingga 20kg</Text>
                </View>
                <TouchableOpacity
                    style={styles.gotoHarga}
                    onPress={onClickDetail}>
                    <Text style={{color:'white'}}>Cek Harga</Text>
                </TouchableOpacity>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={this.toggleModal}>
                    <View>
                        <CheckAddressScreen 
                            toggleModal={this.toggleModal} />
                    </View>
                </Modal>
            </View>
        )
    }

    toggleModal = (to) => {
        this.props.setwhere(to)
        this.setState({            
            showModal: !this.state.showModal
        })        
    }

}

const mapStateToProps = state => ({
    where: state.rate.where,
    counter: state.rate.count,
    fromlocation: state.rate.fromlocation,
    sendlocation: state.rate.sendlocation
})

const mapDispatchToProps = dispatch => ({
    increment: () => { dispatch(increment())}, 
    decrement: () => { dispatch(decrement())},
    setwhere: (value) => { dispatch({ type: 'WHERE', where: value})},
    onClickDetail: () => {
        dispatch(NavigationActions.navigate({ routeName: Screens.CHECK_RATES_DETAIL }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckRatesScreen)