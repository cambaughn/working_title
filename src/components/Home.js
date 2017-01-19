import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import Emoji from 'react-native-emoji';

import Answer from './Answer';
import dummyAnswers from '../assets/dummyData/dummyAnswers';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: dummyAnswers,
    }
  }

  renderAnswers() {
    if (this.state.answers) {
      return (
        <ScrollView style={styles.ScrollView}>
          { this.state.answers.map(answer => {
            return <Answer question={answer} key={answer.asker.question} />
          })}
        </ScrollView>
      )
    }
  }

  renderWelcomeText() {
    if (!this.state.answers) {
      return (
        <View>
          <Text style={styles.welcomeText}> Welcome! <Emoji name="tada"/> </Text>
          <Text style={styles.welcomeText}> Press <Emoji name="mag"/> below to find friends and family!</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.background}>
        { this.renderWelcomeText() }
        { this.renderAnswers() }
      </View>
    )
  }
}

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

  ScrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,

    paddingTop: 60,
    paddingBottom: 60,
  }
}


export default Home;
