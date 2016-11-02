import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import ToolBar from '../common/ToolBar'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import { logoutAPI} from '../../actions/login'

class Setting extends Component {

  logout(){
    const { dispatch } = this.props
    dispatch(logoutAPI())
    this.props.navigator.pop()
  }

  about(){
    this.props.navigator.push({
                id: 'about',
                title:'关于'
          })
  }

  suggest(){
     ToastAndroid.show('开发中', ToastAndroid.SHORT)
  }

  render() {
    return (
      <ScrollView> 
          <ToolBar navigator={this.props.navigator} route={this.props.route}/>

          <TouchableOpacity  style={ styles.item } onPress={this.about.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="map" size={17} color="#00A2FF" />  新手指引</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity  style={ styles.item } onPress={this.about.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="user" size={17} color="#FF7460" />  关于我们</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity  style={ styles.item } onPress={this.suggest.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="envelope" size={17} color="#F4A51D" />  意见反馈</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
          </TouchableOpacity>
          {
            this.props.login == null ? (null):(
             <TouchableOpacity  style={ styles.logout } onPress={this.logout.bind(this)}>
              <Text style={ styles.logoutText } >退出</Text>
              </TouchableOpacity>
              )
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    flex: 1,
    height:40,
    backgroundColor:'#FEFEFE',
    flexDirection: 'row',
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
    marginTop:15,
    justifyContent: 'space-between'
  },
  ItemText: {
    color:'#666',
    fontSize:16,
  },
  logout: {
    backgroundColor:'#FEFEFE',
    height:40,
    marginTop:15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutText: {
    color:'#666',
    fontSize:16,
  }
});


function map(state) {
  return {
    login: state.login.login,
  }
}

export default connect(map)(Setting)