import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,TextInput,TouchableOpacity,
  Navigator
} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import Welcome from './src/components/welcome_component/welcome';
import Login from './src/components/login_component/login';
import Signup from './src/components/signup_component/signup';


export default class reactNative extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id:'Welcome'}}

        renderScene={
          this.navigatorRenderScene
        }/>

    );
  }

  navigatorRenderScene(route,navigator){
    _navigator=navigator;
    switch(route.id){
      case 'Welcome':
        return(<Welcome navigator={_navigator} title="Welcome" />);
      case 'Login':
        return(<Login navigator={_navigator} title="Login" />);
      case 'Signup':
        return(<Signup navigator={_navigator} title="Signup" />);
    }    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});

AppRegistry.registerComponent('reactNative', () => reactNative);
