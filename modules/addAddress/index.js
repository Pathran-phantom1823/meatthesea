import React, {Component} from 'react';
import {View} from 'react-native';
import GooglePlacesAutoCompleteWithMap from 'components/Location/GooglePlacesAutoCompleteWithMap.js';
import Location from 'components/Location';
import styles from './Styles';
class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  render() {
    return (
      <View style={styles.AddAddressContainer}>
        <Location
        // setLocation={location => {
        //   console.log('location', location);
        //   this.setState({location: location});
        // }}
        />
      </View>
    );
  }
}

export default AddAddress;
