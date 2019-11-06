import React, { Component } from 'react';
import {Text, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

var { width } = Dimensions.get('window');

const styles = {
    container: {
      flex: 1,
      marginBottom: 20
    },
  
    wrapper: {
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    image:{
        width,
        flex: 1
    }
}

export default class PHSlider extends React.Component{
    render () {
        return (
          <View style={styles.container}>
            <Swiper style={styles.wrapper} height={240} showsButtons
              onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={{backgroundColor: 'rgba(255,255,255,0.9)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                activeDot={<View style={{backgroundColor: 'blue', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                paginationStyle={{
                    bottom: -23
                }} autoplay loop>
              <View style={styles.slide} >
                <Image resizeMode='stretch' style={styles.image} source={require('../../img/ph/ph1.jpg')} />
              </View>
              <View style={styles.slide} >
                <Image resizeMode='stretch' style={styles.image} source={require('../../img/ph/ph2.jpg')} />
              </View>
              <View style={styles.slide} >
                <Image resizeMode='stretch' style={styles.image} source={require('../../img/ph/ph3.jpg')} />
              </View>
              <View style={styles.slide} >
                <Image resizeMode='stretch' style={styles.image} source={require('../../img/ph/ph4.jpg')} />
              </View>
            </Swiper>
          </View>
        )
      }
}