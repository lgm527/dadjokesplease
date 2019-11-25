import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DadJoke from './components/DadJoke';

 export default class App extends Component {

   state = { joke: '' }

   componentDidMount() {
     this.fetchDadJoke()
   }

   fetchDadJoke() {
     fetch(`https://icanhazdadjoke.com/`, {
       headers: {
         Accept: 'application/json'
       }
     })
     .then(res => res.json())
     .then(data => this.setState({joke: data.joke}))
     .catch(err => {
       console.log(err);
       this.setState({joke: 'dad jokes unavailable right now 😞'})
     })
   }


   render() {

     return (
       <View style={styles.container}>

             <DadJoke style={styles.loadingContainer} joke={this.state.joke}/>

             <Button
              title="One Fresh Dad Joke Please"
              onPress={() => this.fetchDadJoke()}
            />

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
