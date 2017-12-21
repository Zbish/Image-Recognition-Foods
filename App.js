
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Clarifai from 'clarifai';
import hug from './src/images/field.jpg'
process.nextTick = setImmediate
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Kimaia Image recognition fff',
});

const app = new Clarifai.App({
 apiKey: 'b5bfcb7aba854f9da7b6d6e418d778cb'
});
 function gettext(){
  app.models.predict(Clarifai.GENERAL_MODEL, 'http://ptorigin.parenttoolkit.com/images/dmImage/ImageShare/Share_1200x900_tablefood.png').then(
    function(response) {
      console.log('response' ,response);
    },
    function(err) {
      console.error(err);
    }
  );
}
export default class App extends Component {
  render() {
   gettext()
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
