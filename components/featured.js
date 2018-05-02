import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const featured = {
    first: require('./../assets/naruto.jpeg'),
    second: require('./../assets/magi.jpeg'),
    third: require('./../assets/swordartonline.jpg'),
};

export default class Featured extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Swiper 
            style={styles.wrapper} 
            horizontal={true} 
            autoplay={true} >
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={featured.first} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={featured.second} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={featured.third} />
                </View>
            </Swiper>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400,
    },

    slide: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    image: {
        width,
        flex: 2
    }
});