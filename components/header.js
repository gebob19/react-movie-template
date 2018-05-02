import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Hello 2</Text>
      </View>
    );
  }
}

const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    paddingTop: 30,
    marginBottom: 25,
    backgroundColor: '#232323',
  },
  
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
});