import React, {Component} from 'react';
import { ScrollView, StatusBar } from 'react-native';

import Header from './../components/header';
import Featured from './../components/featured';
import AllSeries from './../components/all-series';

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    header: null, 
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }
  
  render() {
    return (
    <ScrollView style={{backgroundColor: '#343434', flex: 1}}>
        <Header title='All Series'/>
        <AllSeries navigation={this.props.navigation}/>
    </ScrollView>
    );
  }
}