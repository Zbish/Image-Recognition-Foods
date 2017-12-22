import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList,Button } from 'react-native'
import ListItem from './ListItem'


export default class List extends Component {

  render() {
      const images = ['omri','cucamber','hotdog']
    return (
      <View style={styles.container}>
                <FlatList
                          data={images}
                          renderItem={({ item }) => <ListItem></ListItem>}
                />
                <Button style={styles.button} color='#FF5722' title={'ADD Image'}>
        </Button >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  button:{
    alignSelf: 'center',
  }
});