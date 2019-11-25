import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

 export default class DadJoke extends Component {

   render() {

     return (
       <View style={styles.container}>
       <Text>{this.props.joke}</Text>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     fontSize: 30,
     color: 'blue',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   }
 });
