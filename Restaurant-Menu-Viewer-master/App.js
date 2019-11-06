/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Main from './screens/Main';
import { createStackNavigator } from "react-navigation";
import SplashScreen from "react-native-splash-screen";
const Navigator = createStackNavigator({
  Main: {
    screen: Main
  }
});

export default class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      <Main />
    );
  }
}

