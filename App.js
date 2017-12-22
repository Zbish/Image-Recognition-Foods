
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground
} from 'react-native';
import Clarifai from 'clarifai';
import List from'./src/component/list/List'
import background from './src/images/background1.png'

process.nextTick = setImmediate
const app = new Clarifai.App({
 apiKey: 'b5bfcb7aba854f9da7b6d6e418d778cb'
});
 function getImageConcepts(){
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
    getImageConcepts()
    return (
      <ImageBackground source={background}  style={styles.container}>
        <List></List>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
