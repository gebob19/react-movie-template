import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Series extends Component {

  constructor(props) {
    super(props);
    this.handleSeriesPress = this.handleSeriesPress.bind(this);
  }

  handleSeriesPress(e, title) {
    this.props.navigation.navigate('Series', {
      seriesTitle: title,
    });
  }
  
  getSeries(series, i) {
    return (
      <TouchableOpacity 
        style={styles.seriesContainer} 
        key={i}
        onPress={(e) => this.handleSeriesPress(e, series.title)}>
        <Image style={styles.series} source={series.coverSource} />
        <Text style={styles.seriesText}>{series.title}</Text>
      </TouchableOpacity>
    );
  }
  
  getAllSeries() {
    const allSeries = [
        {title: 'Naruto', coverPath:'./../assets/naruto.jpeg'},
        {title: 'Magi', coverPath:'./../assets/magi.jpeg'},
      ];
    var series = allSeries[0];
    series.coverSource = require('./../assets/naruto.jpeg');
    let series1 = this.getSeries(series, 0);
    
    series = allSeries[1];
    series.coverSource = require('./../assets/magi.jpeg');
    let series2 = this.getSeries(series, 1);
    let series3 = this.getSeries(series, 2);
    
    return [series1, series2, series3];
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.getAllSeries()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  
  seriesContainer: {
    margin: 10,
    alignItems: 'center',
  },
  
  series: {
    height: 150,
    width: 100,
  },
  
  seriesText: {
    fontSize: 25,
    color: 'white',
  }
});
