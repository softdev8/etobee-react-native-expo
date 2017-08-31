import React from 'react'
import {
    Image,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'

import googleApikey from '@config/googleapi.json';
import { connect } from 'react-redux'

import Icons from '@assets/icons'
import styles from './CheckAddressScreenStyles'
import { 
    setFromAddress,
    setSendAddress
} from './../../services/checkrates/checkratesService'

import {
    placesRequest,
    nearbyRequest,
    setSaveAddress
} from './../../services/searchplaces/GooglePlacesSearchService'

let isMounted = false;

class CheckAddressScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: '',
            longitude: 0,
            latitude: 0
        }
    }
    
    render(){
        const { star } = this.state
        return(
            <View style={styles.container}>
                <View style ={styles.textInputParent}>
                    <TouchableOpacity
                        onPress = { this.closeModal }>
                        <Image
                            style={styles.closeImage}
                            source={Icons.checkCloseBtn}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style = {styles.textInput}
                        autoFocus = {true}
                        placeholder = 'Tulis alamat disini...'
                        placeholderTextColor = '#A8A8A8'
                        onChangeText={(text) => this.onChangeText(text)}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        onPress = { this.onClearText }>
                        <Image
                            style={ this.state.text === "" ? styles.clearEmptyImage : styles.clearImage}
                            source={ Icons.checkClearGrey }
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />     
                <ScrollView contentContainerStyle = {styles.scrollcontainer}>
                {                
                    this.props.searchedPlaces.map((data, i )=>{
                        return(
                            <View 
                                key = {i}
                                style={styles.rowcontainer}>
                                <TouchableOpacity
                                    onPress={this.addressPressed.bind(this,i)}>
                                    <Text style={styles.address}>{ data.place }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.star}
                                    onPress={this.starPressed.bind(this, i)}>
                                    <Image
                                        style={styles.star}
                                        source={data.star ? Icons.checkYelloStar: Icons.checkGrayStar }
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                   })
                }</ScrollView>         
            </View>    
        );
    }

    onClearText = () => {
        this.setState({
            text: "",
        })
        this.requestNearby( this.state.latitude, this.state.longitude );
    }

    onChangeText = (text) => {
        this.request(text);
        this.setState({
          text: text
        })
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        isMounted = true
        console.log("did mount")
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                this.requestNearby( position.coords.latitude, position.coords.longitude );
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    componentWillUnmount() {
        isMounted = false
    }
    
    request(text) {
        if (text.length >= 1) {
            this.props.placesRequest(text)
        } else {
            this.props.nearbyRequest( this.state.latitude, this.state.longitude );
        }
    }

    requestNearby(latitude, longitude) {
        if (latitude && longitude) {
            this.props.nearbyRequest( latitude, longitude )
        } 
    }

    closeModal = () => {
        this.props.toggleModal()
    }

    starPressed = (i) => {
        this.props.setSaveAddress(i, this.props.searchedPlaces)
    }

    addressPressed = (i) => {
        const address = this.props.searchedPlaces[i].place
        this.props.where ? this.props.setSendAddress(address): this.props.setFromAddress(address)
        this.props.toggleModal()
    }

}

const mapStateToProps = state => ({
    where: state.rate.where,
    fromlocation: state.rate.fromlocation,
    sendlocation: state.rate.sendlocation,
    searchedPlaces: state.places.searchedPlaces,

})

const mapDispatchToProps = dispatch => ({
    setSaveAddress: (index, value) => { dispatch(setSaveAddress(index, value))},
    setFromAddress: (value) => { dispatch(setFromAddress(value))},
    setSendAddress: (value) => { dispatch(setSendAddress(value))},
    placesRequest: (text) => { dispatch(placesRequest(text))},
    nearbyRequest: (latitude, longitude) => { dispatch(nearbyRequest(latitude, longitude))},

})

export default connect(mapStateToProps, mapDispatchToProps)(CheckAddressScreen)


