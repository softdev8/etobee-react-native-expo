import React from 'react'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import{
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './TopViewStyles';

import Icons from '@assets/icons'

class TopView extends React.Component {
    
    render () {
        const { onBack } = this.props
        return (
            <Image 
                source={Icons.checkTopBg} 
                style={styles.CheckRateHeader}>
                <Image 
                    source={Icons.checkRates} 
                    style={styles.icon_rates}/>
                <Text style={styles.headertext}>Cek Harga</Text>
                <TouchableOpacity 
                    style={styles.backbutton} 
                    onPress={(onBack)}>
                    <Image 
                        source={Icons.checkBackBtn} 
                        style={{width: 24, height: 24}}/>
                </TouchableOpacity>
            </Image>
        )
    }
}

const mapStateToProps = state => {
    return state.rate
}

const mapDispatchToProps = dispatch => {
    return {
        onBack: () => {
            dispatch(NavigationActions.back())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopView)