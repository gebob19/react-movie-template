import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './components/header';
import Slideshow from './components/slideshow';


export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Header />
        <Slideshow
          dataSource={[
            {url: './assets/naruto.jpegs'},
            {url: ''}
          ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center', 
  }
})