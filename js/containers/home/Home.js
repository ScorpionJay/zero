import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import ToolBar from '../common/ToolBar'
import HomeCarouse from './HomeCarouse'
// import ListCompontent from './ListCompontent'


import { connect } from 'react-redux'
import { fetchList,fetchListItem } from '../../actions/home'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchList())
  }

  _handle(){
    this.props.navigator.push({
       title:'音乐',
       id:'music'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <HomeCarouse style={{height:'200px'}} navigator={this.props.navigator} route={this.props.route}/>
        <View style={{flex: 1,marginTop:10,padding:10,flexDirection: 'row',flexWrap:'wrap'}}>
        {
          this.props.data.map( item => <TouchableHighlight style={{backgroundColor:'red',width:80,height:80,borderRadius:80,margin:10,justifyContent: 'center',alignItems: 'center',}} onPress={ this._handle.bind(this)}><Text>{item.name}</Text></TouchableHighlight> )
        }
        </View>
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
    data: state.home.fetchList
  }
}

export default connect(map)(App)