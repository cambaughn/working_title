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

const Answer = ({ navigator }) => {

  return (
    <View style={styles.container} >
      <View style={styles.topSection}>
        <View style={styles.profilePhotoWrapper}>
          <Image source={require('../assets/images/rey.jpg')} style={styles.profilePhoto}></Image>
        </View>
        <View>
          <Text>Rey</Text>
        </View>
      </View>

      <View style={styles.videoWrapper}>
        <Image source={require('../assets/images/finn.jpg')} style={styles.video}></Image>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}><Text style={styles.askerName}>Han Solo</Text> What is your favorite memory from your childhood?</Text>
      </View>
    </View>
  )
};

// stylin'!
const styles = {
  container: {
    width: Dimensions.get('window').width,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  videoWrapper: {
    overflow: 'hidden',
    height: 300,
    width: Dimensions.get('window').width,
  },

  video: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: undefined,
  },

  profilePhotoWrapper: {
    borderRadius: 100,
    height: 35,
    width: 35,
    overflow: 'hidden',

    marginLeft: 12,
    marginRight: 12,
  },

  profilePhoto: {
    flex: 1,
    width: 35,
    height: undefined,
  },

  topSection: {
    width: Dimensions.get('window').width,
    height: 50,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  bottomSection: {
    width: Dimensions.get('window').width,
    height: 50,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1,

  },

  bottomText: {
    width: Dimensions.get('window').width - 40,
  },

  askerName: {
    fontWeight: 'bold',
  },
}


export default Answer;
