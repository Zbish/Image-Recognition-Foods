import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,TouchableHighlight,FlatList} from 'react-native'

export default class ListItem extends Component {
  render() {
      const concepts = ['food','pizza','dinner','golem','dorido','doritos','avocado','chips',]
    return (
      <TouchableHighlight style={styles.wrapper} underlayColor='grey'>
        <View style={styles.container}>
                   <Image source={require('../../images/car.jpg')} style={styles.image}></Image>
                   <View style={styles.column}>
                   <Text style={styles.Text}>taken : mon 25/12/2017</Text>
                    <FlatList
                    style={styles.list}
                          data={concepts}
                          renderItem={({ item }) => <Text>{item}</Text>}
                />
                   </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        height:120,
        margin:5,
        padding:5,
    },
    container:{
      backgroundColor: 'white',
      flexDirection:'row',
    },
    column:{
        flexDirection:'column'
    },
    image:{
        width:180,
        height:120,
  },
  List:{
    backgroundColor:'green'
    },
    Text:{
        backgroundColor:'white',
        fontSize:14,
        color:'black'
     
    }
  });