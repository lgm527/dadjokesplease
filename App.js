import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DadJoke from './components/DadJoke';

let randomHex = () => {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

 export default class App extends Component {

   state = { joke: '', bgcolor: '' };

   componentDidMount() {
     this.fetchDadJoke();
     this.setState({ bgcolor: randomHex() });
   }

   updateJokeAndColor() {
     this.fetchDadJoke();
     this.setState({ bgcolor: randomHex() });
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
       this.setState({joke: 'Oh no! something went wrong, 😞 dad jokes unavailable right now'})
     })
   }

   render() {

     return (
       <View style={[styles.container, {backgroundColor: this.state.bgcolor}]}>

          <Text style={styles.opener}>Welcome to your infinite supply of dad jokes!</Text>
          <Text style={styles.infinite}>∞ 👨 💬</Text>

             <DadJoke joke={this.state.joke}/>

             <Button
              title="One Fresh Dad Joke Please"
              color="#4d94ff"
              accessibilityLabel="One Fresh Dad Joke Please"
              onPress={() => this.updateJokeAndColor()}
              underlayColor={'black'}
            />

       </View>
     );
   }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: randomHex(),
    paddingBottom: 40,
    padding: 20,
  },
  opener: {
    paddingTop: 40,
    padding: 10,
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 10
  },
  infinite: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
