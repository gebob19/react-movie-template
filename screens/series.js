import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import { Video } from 'expo';
import VideoPlayer from './../components/videoplayer';
import Header from './../components/header';

export default class SeriesScreen extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      autoPlay: true,
    }
    this.episodeClick = this.episodeClick.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
    
    const { params } = this.props.navigation.state;
    const firebaseServices = params.firebaseServices;
    const refID = params.refID;
    const seriesTitle = params.seriesTitle;

    var db = firebaseServices.set();
    db.collection('seriesLinks').doc(refID).get()
      .then(doc => {
        var data = doc.data();
        this.setState({
          isLoading: false,
          title: seriesTitle,
          links: data.links,
          names: data.names,
          activeURL: data.links[0],
          activeEpisode: data.names[0]
        })
      });
  }

  episodeClick(e, title, link) {
    this.setState({
      activeEpisode: title,
      activeURL: link,
    });
  }

  getEpisodeComponent(episode, key) {
    return (
      <TouchableOpacity 
        style={styles.episodeContainer} 
        key={key}
        onLongPress={(event) => 
          this.episodeClick(event, episode.name, episode.link)}>
        <Text style={[styles.episodeText, episode.watched && 
          styles.episodeWasWatched]}>{key}: {episode.name} </Text>
      </TouchableOpacity>
    );
  }

  getEpisodes() {
    var links = this.state.links;
    var names = this.state.names;

    var episodeComponents = [];

    for (var i=0; i < links.length; i++) {
      var episode ={
        name : names[i],
        link : links[i],
        watched : false,
      }
      var component = this.getEpisodeComponent(episode, i+1);
      episodeComponents.push(component);
    }
    
    return episodeComponents;
  }
  
  render() {
    return (
      <View style={{backgroundColor: '#343434', flex: 1}}>
        {this.state.isLoading && <Text>Loading...</Text>}
        {this.state.isLoading || 
          <View style={{flex: 1}}>
          <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: { 
                uri: this.state.activeURL 
                },
            }}
            showControlsOnLoad={true}
            playFromPositionMillis={0}
            />
        <Header title={this.state.title} subTitle={'Currently Watching: \'' + this.state.activeEpisode+'\''}/>
        <ScrollView style={styles.allEpisodesContainer}>
          {this.getEpisodes()}
        </ScrollView>
        </View>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  allEpisodesContainer: {
    margin: 10,
    flex: 1,
  },
  
  episodeText: {
    color: 'white',
    fontSize: 15,
  },
  
  episodeWasWatched: {
    color: '#707070',
  },
  
  episodeContainer: {
    padding: 10,
    marginBottom: 15,
    
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})