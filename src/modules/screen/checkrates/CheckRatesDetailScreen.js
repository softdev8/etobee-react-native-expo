import React from 'react'
import { 
    View, 
    Image, 
    Text, 
    TouchableOpacity 
} from 'react-native'
import { connect } from 'react-redux'

import styles from './CheckRatesDetailScreenStyles'
import Icons from '@assets/icons'
import TopView from './components/TopView'

class CheckRatesDetailScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            selState: 0,
        }
    }
    render() {
        const { counter, fromlocation, sendlocation } = this.props

        return (
            <View 
                style={styles.container}>
                <TopView />
                <Image
                    source = {Icons.checkRibbon}
                    style = {styles.ribbon} />
                <View style = {styles.nonSelAddress}>
                    <Text style={styles.nonSelNote}>  Dari</Text>
                    <Text style={styles.noneAddress}>{fromlocation}</Text>
                </View>
                <View style={styles.nonSelAddress}>
                    <Text style={styles.nonSelNote}>     Ke</Text>
                    <Text style={styles.noneAddress}>{sendlocation}</Text>
                </View>
                <View style = {styles.nonSelAddress}>
                    <Text style = {styles.nonSelNote}> Berat</Text>
                    <Text style = {styles.noneAddress}>{`<${counter}`} kg</Text>
                </View>
                <View style={styles.selDuration}>
                    <Text style={{paddingTop: 15, paddingBottom: 10, opacity: 0.5}}>KAPAN ANDA INGIN BARANG ANDA SAMPAI?</Text>
                    <View style={styles.rateView}>
                        <TouchableOpacity onPress={()=>this.setState({selState:0})}>
                            <View 
                                style={this.state.selState === 0 ? styles.rateSelType : styles.rateNoneSelType}>
                                <Image 
                                    source={Icons.checkSds} 
                                    style={styles.icon} />
                                <Text style={{marginTop: 10}}>Hari ini</Text>
                                <Text style={styles.currency}>Rp. 45.000</Text>
                            </View>    
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({selState:1})}>
                            <View 
                                style={this.state.selState === 1 ? styles.rateSelType : styles.rateNoneSelType}>
                                <Image 
                                    source={Icons.checkNds} 
                                    style={styles.icon} />
                                <Text style={{marginTop: 10}}>Besok</Text>
                                <Text style={styles.currency}>Rp. 15.000</Text>
                            </View>    
                        </TouchableOpacity>                            
                        <TouchableOpacity onPress={()=>this.setState({selState:2})}>
                            <View 
                                style={this.state.selState === 2 ? styles.rateSelType : styles.rateNoneSelType}>
                                <Image 
                                    source={Icons.checkReguler} 
                                    style={styles.icon} />
                                <Text style={{marginTop: 10}}>3-5 hari</Text>
                                <Text style={styles.currency}>Rp. 8.000</Text>
                            </View>    
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.rateNote}>Suka dengan harga yang anda lihat?</Text>        
                    <Text style={styles.rateNote}>Pencet tombol dibawah untuk langsung membuat pengiriman.</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.sendNow}>
                        <Text style={{color: '#fff', fontSize: 16}}>Kirim Barang Sekarang</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.rate.count,
    fromlocation: state.rate.fromlocation,
    sendlocation: state.rate.sendlocation

})

const mapDispatchToProps = dispatch => ({
    //
})
export default connect(mapStateToProps,mapDispatchToProps)(CheckRatesDetailScreen)