import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet } from 'react-native';

import VideoPlayer from './../components/videoplayer';
import { Video } from 'expo';

export default class SeriesScreen extends Component {
  
  /*static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
      return {
        title: params ? params.seriesTitle : null,
      };
  };*/

  static navigationOptions = {
    header: null
  };
  
  render() {
    const { params } = this.props.navigation.state;
    const title = params ? params.seriesTitle : null;
    const url = '';
    return (
      <View>
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
        <Text> {title} </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
})