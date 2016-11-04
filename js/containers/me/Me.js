import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import ToolBar from '../common/ToolBar'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { accountAPI } from '../../actions/account'

class Me extends Component {

  componentDidMount(){
    const { dispatch } = this.props

    if( this.props.login ){
      // logined get user's info
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
        })
    }else {
      this.props.navigator.push({
              id: 'account',
              title: '个人信息',
             
        })
    }
  }

  album(){
    ToastAndroid.show('开发中', ToastAndroid.SHORT)
    // this.props.navigator.push({
    //           id: 'setting',
    //           title: '设置'
    //     })
  }

  setting(){
    this.props.navigator.push({
              id: 'setting',
              title: '设置'
        })
  }

  collect(){
    ToastAndroid.show('开发中', ToastAndroid.SHORT)
    // this.props.navigator.push({
    //           id: 'setting',
    //           title: '设置'
    //     })
  }

  render() {
    const { account } = this.props
    let name = '未登录'
    if(account){
      name = account.nickname ? account.nickname : account.name
    }
    return (
      <View>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>

        <TouchableOpacity  style={ [styles.account] } onPress={this.hanlder.bind(this)}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            {
              this.props.account ? 
              (<Image source={{uri: 'http://odyv5xg88.bkt.clouddn.com/34.jpg'}} style={styles.photo}/>) : (<Image source={require('../images/photo.jpg')} style={styles.photo}/>)
            }
            
            <View  style={{marginLeft:20}}>
              <Text style={{fontSize:20}}>{name}</Text>
            </View>
          </View>
          <Icon name="angle-right" size={22} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity  style={ styles.item } onPress={this.album.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="photo" size={17} color="#FC8202" />  相册</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity  style={ styles.item } onPress={this.collect.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="cube" size={17} color="#14C083" />  收藏</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity  style={ styles.item } onPress={this.setting.bind(this)}>
            <Text style={ styles.ItemText }><Icon name="gear" size={17} color="#10AEFF" />  设置</Text>
            <Icon name="angle-right" size={22} color="#aaa" />
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    height:90,
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#FEFEFE',
    flexDirection: 'row',
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    justifyContent: 'space-between',
    alignItems:'center'
  },
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
  photo:{
    width: 70,
    height:70,
    borderRadius:60,
    borderWidth:4,
    borderColor:'#eee'
  }
});


function map(state) {
  return {
    data: state.home.fetchList,
    login: state.login.login,
    account: state.account.account
  }
}

export default connect(map)(Me)