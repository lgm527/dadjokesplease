import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

 export default class DadJoke extends Component {

   render() {

     return (
       <View style={styles.container}>
       <ScrollView>
       <Text style={styles.textJoke}>{this.props.joke}</Text>
       </ScrollView>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 30,
     marginBottom: 30,
     backgroundColor: '#e6e6e6',
     borderRadius: 80,
   },
   textJoke: {
     fontSize: 25,
     padding: 50,
     textAlign: 'center',
     fontFamily: 'notoserif',

   }
 });
