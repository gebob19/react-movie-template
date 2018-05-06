import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity } from 'react-native';

const firebaseServices = require('../services/firebaseServices');

export default class Series extends Component {

  constructor(props) {
    super(props);
    this.handleSeriesPress = this.handleSeriesPress.bind(this);
    this.state = {
      isLoading: true,
      series: [],
    }
  }

  componentDidMount() {
    var db = firebaseServices.set();
    db.collection('series').get()
      .then(snapshot => {
        var series = []
        snapshot.forEach(doc => {
          var data = doc.data();
          data.refID = doc.id;
          series.push(data);
        });

        this.setState({
          isLoading: false,
          series: series,
        });
      });
  }

  handleSeriesPress(e, title, refID) {
    this.props.navigation.navigate('Series', {
      seriesTitle: title,
      firebaseServices: firebaseServices,
      refID: refID,
    });
  }
  
  getAllSeries() {
    var allSeries = this.state.series;
        
    var seriesComponents = [];

    for (var i=0; i < allSeries.length; i++) {
      var curr = allSeries[i];
      curr.coverSource = this.getAsset(curr.coverArt);
      var component = this.getSeries(curr, i);
      seriesComponents.push(component);
    }

    return seriesComponents;
  }

  // https://github.com/facebook/react-native/issues/6391
  // link the firebase field 'coverArt' to a photo in /assets
  // TODO
  getAsset(asset) {
    switch(asset) {
      case '{coverArt Field}': return require('../assets/{image here}');
    }
  }

  getSeries(series, i) {
    return (
      <TouchableOpacity 
        style={styles.seriesContainer} 
        key={i}
        onPress={(e) => this.handleSeriesPress(e, series.title, series.refID)}>
        <Image style={styles.series} source={series.coverSource} />
      </TouchableOpacity>
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && 
        <Image 
        style={{flex: 1}}
        source={require('../assets/loading.gif')}/>}
        {this.state.isLoading || this.getAllSeries()}
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
