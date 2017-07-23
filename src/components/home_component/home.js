import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';

export default class Home extends Component{
	navBar(navevent){
		this.props.navigator.push({
			//id:navevent
		})
	}
	render(){
		return (
			
				<View style={styles.container}>
					
				</View>

		);
	}
}

const styles=StyleSheet.create({
	
})