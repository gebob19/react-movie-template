import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import Header from './components/header';
import Featured from './components/featured';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Featured />
      </View>
    );
  }
}
