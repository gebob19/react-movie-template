import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import Header from './components/header';
import Featured from './components/featured';
import Series from './components/series';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Header title='My Movies' paddingTop={30}/>
        <Header title='Featured' paddingTop={5}/>
        <Featured />
        <Header title='All Series' paddingTop={5}/>
        <Series />
        <Series />
      </ScrollView>
    );
  }
}
