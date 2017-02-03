import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import Emoji from 'react-native-emoji';

import colors from '../styles/colors';

const BottomNavBar = ({ navigator, viewLabel }) => {

  // destructuring the styles for easier readability inside of returned JSX
  const {
    bottomBar,
    navButton,
    text,
  } = styles;


  const menu = [
    {label: 'house', navTo: 'Home'},
    {label: 'mag', navTo: 'ChatList'},
    {label: 'smile_cat', navTo: 'UserProfile'}
  ];

  const renderText = function() {
    return menu.map(option => {

      let style = text;
      if (option.label === viewLabel) {
        style = {...text, ...{color: colors.lightBlue}};
      }
      return (
        <TouchableHighlight
          onPress={() => navigator.push({name: option.navTo})}
          underlayColor={colors.extraLightGrey}
          key={option.label}
        >
          <Text style={style}><Emoji name={option.label}/></Text>
        </TouchableHighlight>
      )
    })
  }

  return (
    <View style={bottomBar}>
      { renderText() }
    </View>
  )
};

// stylin'!
const styles = {
  bottomBar: {
    backgroundColor: 'white',

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: Dimensions.get('window').width,
    height: 50,

    position: 'absolute',
    top: Dimensions.get('window').height - 50,
    right: 0,
    zIndex: 1,

    borderTopWidth: 0.5,
    borderTopColor: colors.extraLightGrey,
  },
  navButton: {

  },
  text: {
    color: colors.lightGrey,

  },
}


export default BottomNavBar;
