import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

 export default class DadJoke extends Component {

   render() {

     return (
       <View style={styles.container}>
       <Text style={styles.textJoke}>{this.props.joke}</Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   textJoke: {
     fontSize: 25,
     textAlign: 'center',
     fontFamily: 'notoserif'
   }
 });
