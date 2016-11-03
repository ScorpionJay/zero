import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native';


import Carousel from 'react-native-looped-carousel'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var carouselTest = React.createClass({
  getInitialState: function() {
    return {
      size: {width: width, height: height/4}
    };
  },
  _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },

  _handle:function(u){
    this.props.navigator.push({
       title:'音乐',
       id:'music',
       params: {
        url: u
      }
    })
  },


  render: function() {
    return (
      <View   onLayout={this._onLayoutDidChange} >
        <Carousel delay={9000} style={this.state.size} bullets={true} >
            <TouchableHighlight onPress={this._handle.bind(this,'http://scorpionjay.github.io/ONE')} >
              <Image source={{uri: 'http://odyv5xg88.bkt.clouddn.com/1.jpg'}} style={this.state.size} />
            </TouchableHighlight>

            <TouchableHighlight onPress={ this._handle.bind(this,'http://scorpionjay.github.io/ONE/demo.html')} >
              <Image source={{uri: 'http://odyv5xg88.bkt.clouddn.com/2.jpg'}} style={this.state.size} />
            </TouchableHighlight>

            <TouchableHighlight onPress={ this._handle.bind(this,'http://scorpionjay.github.io/')} >
              <Image source={{uri: 'http://odyv5xg88.bkt.clouddn.com/3.jpg'}} style={this.state.size} />
            </TouchableHighlight>
        </Carousel>
      </View>
    );
  }
});

export default carouselTest