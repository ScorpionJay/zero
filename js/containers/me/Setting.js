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
import { logoutAPI } from '../../actions/login'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props

    // if( this.props.login ){
    //   // 已经登录 获取用户信息
    //   dispatch(accountAPI(this.props.login))
    // }
    // console.log('loginggg',this.props.login)
  }
  
  hanlder(){
    const {navigator,login,dispatch} = this.props

    if( !this.props.login ){
        this.props.navigator.push({
              id: 'login',
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

  logout(){
    const { dispatch } = this.props
    dispatch(logoutAPI())
    this.props.navigator.pop()
    // this.props.navigator.push({
    //           id: 'setting'
    //     })
  }

  about(){
    this.props.navigator.push({
                id: 'about',
                title:'关于'
          })
  }

  render() {




    return (
      <TouchableOpacity  onPress={this.hanlder.bind(this)}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <TouchableOpacity  onPress={this.about.bind(this)}>
          <Text>关于</Text>
        </TouchableOpacity>
        {
          this.props.login == null ? (null):(
           <TouchableOpacity  onPress={this.logout.bind(this)}>
            <Text>退出</Text>
            </TouchableOpacity>
            )
          
        }
       
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
    login: state.login.login,
  }
}

export default connect(map)(App)