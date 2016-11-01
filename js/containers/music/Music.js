import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import ToolBar from '../common/ToolBar'
// import ListCompontent from './ListCompontent'


import { connect } from 'react-redux'
import { musicRecommendAPI } from '../../actions/music'

class Music extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(musicRecommendAPI())
    console.log('aaa',this.props.data.info)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <ScrollView>
        {
          this.props.data.info.map( item => <View style={{padding:10}}><Text style={{fontSize:16}}>{item.songname}</Text><Text style={{fontSize:12}}>{item.singername}</Text></View> )
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


function map(state) {
  return {
    data: state.music.musicRecommend
  }
}

export default connect(map)(Music)