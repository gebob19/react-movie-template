import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.props.subTitle && <Text style={styles.subTitle}>{this.props.subTitle}</Text>}
      </View>
    );
  }
}

const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    padding: 15,
    backgroundColor: '#232323',
    alignItems: 'center',
  },
  
  title: {
    color: 'white',
    fontSize: 30,
  },
  
  subTitle: {
    color: 'white',
    fontSize: 15,
  }
});