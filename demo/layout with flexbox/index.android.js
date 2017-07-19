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


//export default class FixedDirectionBasics extends Component{
//	render(){
//	return(
//		<View style={{flex:1,flexDirection:'row'}}>
//			<View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
//			<View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
//			<View style={{width:50,height:50,backgroundColor:'red'}}/>
//		</View>
//	);
//	}
//}
//export default class JustifyContentBasics extends Component{
//	render(){
//		return(
//		<View style={{
//			flex:1,
//			flexDirection:'column',
//			justifyContent:'space-between',
//			}}>
//			<View style={{width:50,height:50,backgroundColor:'red'}}/>
//			<View style={{width:50,height:50,backgroundColor:'blue'}}/>
//			<View style={{width:50,height:50,backgroundColor:'yellow'}}/>
//			</View>
//		);		
//	}
//}
export default class AlignCenter extends Component{
	render(){
		return(
			<View style={{
				flex:1,
				flexDirection:'column',
				justifyContent:'center',
				alignItems:'center',
				}}>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
		);
	}
}
//AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
//AppRegistry.registerComponent('helloReactNative', () => HelloWorld);
AppRegistry.registerComponent('helloReactNative', () => AlignCenter);