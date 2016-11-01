import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import ToolBar from '../common/ToolBar'
// import CarouselCompont from '../../common/RNCarousel'
// import ListCompontent from './ListCompontent'

import { connect } from 'react-redux'
import { accountAPI } from '../../actions/account'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props

    if( this.props.login ){
      // 已经登录 获取用户信息
      dispatch(accountAPI(this.props.login))
    }
    console.log('loginggg',this.props.login)
  }
  
  hanlder(){
    const {navigator,login,dispatch} = this.props

    if( !this.props.login ){
        this.props.navigator.push({
              id: 'login',
              title: '登录'
              // params: {
              //   getUser: function(token){
              //     console.log('me' , token);
              //     //dispatch(accountAPI(token))
              //   }
              // }
        })
    }
    
    // navigator.replace({
    //       id: 'login',
    //       title: '登录'
    //     })
      
  }

  setting(){
    this.props.navigator.push({
              id: 'setting',
              title: '设置'
        })
  }

  render() {
    const { account } = this.props
    let name = ''
    if(account){
      name = account.name
    }
    return (
      <TouchableOpacity style={styles.container} onPress={this.hanlder.bind(this)}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <Text>Me</Text>
        <Text>{name}</Text>
        <TouchableOpacity style={styles.container} onPress={this.setting.bind(this)}>
          <Text>设置</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function map(state) {
  return {
    data: state.home.fetchList,
    login: state.login.login,
    account: state.account.account
  }
}

export default connect(map)(App)