import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,TextInput} from 'react-native';

export default class Login extends Component{
	render(){
		return (
			
				<View style={styles.container}>
					<View style={styles.headerContainer}>
						<Text style={styles.header}>
							WELCOME
						</Text>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							placeholder="User Name"
							placeholderTextColor="#9a9a9a"
							returnKeyType="next"
							style={styles.input}
						/>

						<TextInput
							placeholder="Password"
							placeholderTextColor="#9a9a9a"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
						/>
					</View>

					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>

				</View>

		);
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		padding:0,
		backgroundColor:'rgb(252, 252, 252)',
		position:'relative',

	},
	headerContainer:{
		backgroundColor:'#00bfa5',
		paddingVertical:15,
	},
	header:{
		color:"#ffffff",
		margin:12,
		textAlign:'center',
		fontSize:25
	},
	inputContainer:{
		marginTop:70
	},
	input:{
		color:"#312f2f",
		paddingVertical:15,
		marginBottom:30,
		marginLeft:45,
		marginRight:45,
		fontSize:20,
		fontWeight:'400',
	},
	buttonContainer:{
		backgroundColor:"#00bfa9",
		paddingVertical:15,
		marginTop:40,
		marginBottom:40,
		marginLeft:45,
		marginRight:45,
		borderRadius:10
	},
	buttonText:{
		color:"#ffffff",
		textAlign:'center',
		fontWeight:'500',
		fontSize:23
	}

})