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

//export default class FixedDimensionsBasics extends Component{
//	render(){
//		return(
//		<View style=>
//			<View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
//			<View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
//			<View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
//		</View>	
//		);
//		}
//}

export default class FixedDimensionsBasics extends Component{
	render(){
	return(
		<View style={{flex:1}}>
			<View style={{flex:1,backgroundColor:'powderblue'}}/>
			<View style={{flex:2,backgroundColor:'skyblue'}}/>
			<View style={{flex:3,backgroundColor:'steeblue'}}/>
		</View>
	);
	}
}
//AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
//AppRegistry.registerComponent('helloReactNative', () => HelloWorld);
AppRegistry.registerComponent('helloReactNative', () => FixedDimensionsBasics);