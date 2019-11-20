import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SendSMS from 'react-native-sms';

 export default class App extends React.Component {

   state = {
     sent: false
   };

   componentDidMount() {
   }

   render() {

     return (
       <View style={styles.container}>
         {!this.state.sent ? (
           <View style={styles.loadingContainer}>
             <Text stlye={styles.loadingText}>Hi</Text>
           </View>
           ) : (

         )}
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff'
   },
   loadingContainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#FFFDE4'
   },
   loadingText: {
     fontSize: 30
   }
 });
