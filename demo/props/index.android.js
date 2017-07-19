/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

//export default class helloReactNative extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//      <Text>Hello world!</Text>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Double tap R on your keyboard to reload,{'\n'}
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//helloword
//export default class HelloWorld extends Component{
//	render(){
//		return (
//			<Text>Hello World</Text>
//		);
//	}
//}
//export default class Bananas extends Component{
//	render(){
//		let pic={
//			uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//			};
//		return(
//			<Image source={pic} style={{width:193,height:110}}/>
//		);
//	}
//}
class Greeting extends Component{
	render(){
		return(
		<Text>Hello {this.props.name}!</Text>
		);
	}
}

export default class LotsOfGreetings extends Component{
	render(){
		return(
		<View style={{alignItems:'center'}}>
		<Greeting name="A"/>
		<Greeting name="B"/>
		<Greeting name="C"/>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
//AppRegistry.registerComponent('helloReactNative', () => HelloWorld);
AppRegistry.registerComponent('helloReactNative', () => LotsOfGreetings);
