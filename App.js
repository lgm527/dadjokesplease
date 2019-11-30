import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DadJoke from './components/DadJoke';

 export default class App extends Component {

   state = { joke: '', bgcolor: '' };

   componentDidMount() {
     this.fetchDadJoke();
     this.setState({ bgcolor: 'White' });
   }

   updateJokeAndColor() {
     this.fetchDadJoke();
     this.changeBGColor();
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

   getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
    }

   changeBGColor() {
     let index = getRandomArbitrary(0, 13);
     this.setState({ bgcolor: colors[index] });
   }

   render() {

     return (
       <View style={styles.container}>

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

 const colors = [
   '#00FFFF', //Aqua
   '#7FFFD4', //Aquamarine
   '#EE82EE', //Violet
   '#7FFF00', //Chartreuse
   '#FF7F50', //Coral
   '#6495ED', //CornflowerBlue
   '#DC143C', //Crimson
   '#006400', //Dark Green
   '#FF8C00', //Dark Orange
   '#FF1493', //Deep Pink
   '#1E90FF', //Dodger Blue
   '#FFD700', //Gold
   '#FFFFFF', //White
 ] //13

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: this.state.bgcolor,
     paddingBottom: 40,
     padding: 20,
   },
   opener: {
     paddingTop: 40,
     padding: 10,
     fontSize: 23,
     textAlign: 'center',
     fontWeight: 'bold'
   },
   infinite: {
     fontSize: 30,
     textAlign: 'center',
     fontWeight: 'bold'
   }
 });
