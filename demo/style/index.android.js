/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class LotsOfStyles extends Component{
	render(){
		return(
		<View>
			<Text style={styles.red}>A</Text>
			<Text style={styles.bigblue}>B</Text>
			<Text style={styles.bigblue,styles.red}>A,B</Text>
			<Text style={styles.red,styles.bigblue}>A,B</Text>
		</View>	
		);
		}
}
const styles = StyleSheet.create({
	bigblue:{
		color:'blue',
		fontWeight:'bold',
		fontSize:30,
	},
	red:{
		color:'red'
	},
});
//AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
//AppRegistry.registerComponent('helloReactNative', () => HelloWorld);
AppRegistry.registerComponent('helloReactNative', () => LotsOfStyles);