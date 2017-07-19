/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Blink extends Component{
	constructor(props){
		super(props);
		this.state = {showText:true};
		setInterval(()=>{
			this.setState(previousState=>{
				return{
					showText:!previousState.showText};
			});
		},1000);
	}
	render(){
		let display = this.state.showText?this.props.text:'';
		return(<Text>{display}</Text>);
	}
}
export default class BlinkApp extends Component{
	render(){
		return(
		<View>
			<Blink text='AAAA'/>
			<Blink text='BBBB'/>
			<Blink text='CCCC'/>
		</View>	
		);
		}
}

//AppRegistry.registerComponent('helloReactNative', () => helloReactNative);
//AppRegistry.registerComponent('helloReactNative', () => HelloWorld);
AppRegistry.registerComponent('helloReactNative', () => BlinkApp);