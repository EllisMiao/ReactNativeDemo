/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,ScrollView,Image,Text} from 'react-native';

export default class ScrollTest extends Component {
 
  render() {
    return (
     	<ScrollView>
     		<Text style={{fontSize:96}}>Scroll me plz</Text>
    		<Text style ={{fontSize:96}}>If you like</Text>
    		<Text style={{fontSize:96}}>What's the best</Text>
    		<Text style={{fontSize:96}}>Framework around?</Text>
    		</ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('helloReactNative', () => ScrollTest);