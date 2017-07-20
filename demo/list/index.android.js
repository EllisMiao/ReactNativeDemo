/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,FlatList,SectionList,StyleSheet,Text,View} from 'react-native';

//FlatList
//export default class FlatListBasics extends Component {
// 
//  render() {
//    return (
//     	<View style={styles.container}>
//     	<FlatList
//     		data={[
//     			{key:'Devin'},
//     			{key:'Jackson'},
//     			{key:'James'},
//     			{key:'Joel'},
//     			{key:'John'},
//     			{key:'Jillian'},
//     			{key:'Jimmy'}
//     			]}
//     		renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
//     		/>
//     		</View>
//    );
//  }
//}

export default class SectionListBasics extends Component{
	render(){
		return(
			<View style={styles.container}>
				<SectionList
						sections={[
							{title:'D',data:['Devin']},
							{title:'J',data:['Jackson','James','Jillian']}
							]}
						renderItem={({item})=><Text style={styles.item}>{item}</Text>}
						renderSectionHeader={({section})=><Text style={styles.sectionHeader}
					>{section.title}</Text>}
						/>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:22
		},
	setionHeader:{
		paddingTop:2,
		paddingLeft:10,
		paddingRight:10,
		paddingBottom:2,
		fontSize:14,
		fontWeight:'bold',
		backgroundColor:'blue'
	},
	item:{
		padding:10,
		fontSize:18,
		height:44
		}
})
// skip this line if using Create React Native App
AppRegistry.registerComponent('helloReactNative', () => SectionListBasics);