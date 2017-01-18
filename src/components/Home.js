import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableHighlight,
  MapView,
} from 'react-native';

import Emoji from 'react-native-emoji';

import Answer from './Answer';

const Home = ({ navigator }) => {

  return (
    <View style={styles.background} >
      <Text style={styles.welcomeText}> Welcome! <Emoji name="tada"/> </Text>
      <Text style={styles.welcomeText}> Press <Emoji name="mag"/> below to find friends and family!</Text>
    </View>
  )
};

// stylin'!
const styles = {
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    width: Dimensions.get('window').width - 80,
    textAlign: 'center',
  },
}


export default Home;
