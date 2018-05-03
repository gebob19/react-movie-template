import React, {Component} from 'react';
import { ScrollView } from 'react-native';

import Header from './../components/header';
import Featured from './../components/featured';
import Series from './../components/series';

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
    <ScrollView>
        <Header title='Featured' 
            paddingTop={5}/>
        <Featured />
        <Header 
            title='All Series' 
            paddingTop={5}/>
        <Series navigation={this.props.navigation}/>
        <Series navigation={this.props.navigation}/>
    </ScrollView>
    );
  }
}