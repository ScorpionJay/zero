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

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchList())
  }

  link(obj){
    console.log(obj)
    this.props.navigator.push({
       title:obj.name,
       id:obj.link
    })
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <HomeCarouse style={{height:'200px'}} navigator={this.props.navigator} route={this.props.route}/>
        <View style={ styles.nav }>
        {
          this.props.data.map( item => {

            var s = {
              backgroundColor: item.color,
              width:(width-20)/5 - 10,
              height:(width-20)/5 - 10,
              borderRadius:(width-20)/5 - 10,
              margin:5,
              marginTop:15,
              padding:10
            }


          return  <TouchableHighlight style={[s,styles.item]} key={item.name} onPress={ this.link.bind(this,item)}><Text style={{fontSize:16,color:'#fff'}}>{item.name}</Text></TouchableHighlight> 
          })
        }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 1,marginTop:20,padding:10,flexDirection: 'row',flexWrap:'wrap',justifyContent: 'center',
  },
  item: {
   justifyContent: 'center',alignItems: 'center',
  }
});


function map(state) {
  return {
    data: state.home.fetchList
  }
}

export default connect(map)(App)