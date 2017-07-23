import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';

export default class Welcome extends Component{
	navBar(navevent){
		this.props.navigator.push({
			id:navevent
		})
	}
	render(){
		return (
			
				<View style={styles.container}>
					<Image
						style={styles.pageBg}			
						source={require('../../../images.firstBg.jpg')}
					/>
					<View style={styles.welcomeContainer}>
						<View style={styles.logoContainer}>
							<Image
								style={styles.logo}
								source={require('../../../images.logo.png')}
							/>
						</View>

						<View style={styles.userButtonWrapper}>

							<TouchableOpacity style={styles.buttonContainer} onPress={this.navBar.bind(this,"Login")}>	
								<View style={styles.iconWrapper}>
									<Image style={styles.icon} 
											source={require('../../../images.userBG.png')}
											resizeMode="contain" />
								</View>
								<Text style={styles.buttonText}>Login</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.buttonContainer} onPress={this.navBar.bind(this,"Signup")}>
								<View style={styles.iconWrapper}>
									<Image style={styles.icon} 
											source={require('../../../images.userBG.png')}
											resizeMode="contain" />
								</View>
								<Text style={styles.buttonText}>Sign up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

		);
	}
}

const styles=StyleSheet.create({
	pageBg:{
		 flex: 1,
		resizeMode:'cover',
		zIndex:1,		
		position:'absolute',
		width:500
	},
	iconWrapper:{
		flex:1,
		justifyContent:'center',
		top:10,
		left:20
	},
	icon:{
		width:20,
		width:20,

	},
	container:{
		flex:1,
		padding:20,
		backgroundColor:'transparent',
		position:'relative'
	},
	welcomeContainer:{
		flexGrow:1,
		zIndex:2

	},
	logoContainer:{
		justifyContent:'center',
		alignItems:'center',
		marginTop:70

	},
	logo:{
		width:134,
		height:105,
	},
	buttonContainer:{
		backgroundColor:'#ffffff',
		paddingVertical:15,
		marginBottom:40,
		marginLeft:15,
		marginRight:15,
		borderRadius:15

	},
	userButtonWrapper:{
		marginTop:70
	},
	buttonText:{
		textAlign:'center',
		fontWeight:'700'
	}
})