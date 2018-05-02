import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

export default class Series extends Component {
  
  getSeries(series, i) {
    return (
      <View style={styles.seriesContainer} key={i}>
        <Image style={styles.series} source={series.coverSource} />
        <Text style={styles.seriesText}>{series.title}</Text>
      </View>
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
    
    return [series1, series2];
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
  }
  
  
});
