import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const padding = {paddingTop: this.props.paddingTop};
    return(
      <View style={styles.container}>
        <Text style={[styles.title, padding]}>{this.props.title}</Text>
      </View>
    );
  }
}

const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    backgroundColor: '#232323',
  },
  
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
});