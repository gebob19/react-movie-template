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
      activeTitle: 'Enter: Naruto Uzumaki!',
      activeUrl: 'https://www1234.playercdn.net/86/2/UQGgA7i9EEGOthHDs1BKRQ/1525485137/180219/195FOLLV83DFQSSM51KUT.mp4', 
      autoPlay: false,
    }
    this.episodeClick = this.episodeClick.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  episodeClick(e, title) {
    var newUrl = 'https://www2381.playercdn.net/86/0/vF8_OpuhS8zlOoyt9gNURQ/1525536522/180219/203FOLM6NU23ZGTYUI865.mp4';
    this.setState({
      activeUrl: newUrl,
      activeTitle: title,
      autoPlay: true,
    });
  }

  getEpisodeElement(episode, key) {
    const title = episode.title;
    return (
      <TouchableOpacity 
        style={styles.episodeContainer} 
        key={key}
        onPress={(event) => this.episodeClick(event, title)}>
        <Text style={[styles.episodeText, episode.watched && styles.episodeWasWatched]}>{key}: {title} </Text>
      </TouchableOpacity>
    );
  }

  getEpisodes() {
    var episodes = {
      1: {
        title : 'Enter: Naruto Uzumaki!',
        watched : true,
      },
      2 : {
        title: 'My Name is Konohamaru!',
        watched : false,
      }
    };
    
    var output = []
    for (var key in episodes) {
      var episode = episodes[key];
      output.push(this.getEpisodeElement(episode, key));
    }
    
    return (output);
  }
  
  render() {
    const { params } = this.props.navigation.state;
    const title = params ? params.seriesTitle : null;
    const url = this.state.activeUrl;
    return (
      <View style={{backgroundColor: '#343434', flex: 1}}>
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: { 
                uri: url 
                },
            }}
            showControlsOnLoad={true}
            playFromPositionMillis={0}
            />
        <Header title={title} subTitle={'Currently Watching: \'' + this.state.activeTitle+'\''}/>
        <ScrollView style={styles.allEpisodesContainer}>
          {this.getEpisodes()}
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  allEpisodesContainer: {
    margin: 10,
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