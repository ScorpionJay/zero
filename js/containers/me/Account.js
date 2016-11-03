import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Image
} from 'react-native';

import ToolBar from '../common/ToolBar'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import { logoutAPI} from '../../actions/login'

class Account extends Component {

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

  render() {
    const { account } = this.props

    return (
      <ScrollView> 

          <ToolBar navigator={this.props.navigator} route={this.props.route}/>

          <TouchableOpacity style={ styles.photoItem } onPress={this.about.bind(this)}>
            <Text style={ styles.ItemText }>头像</Text>  
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center' }}> 
              {
                this.props.account ? 
                (<Image source={{uri: 'http://odyv5xg88.bkt.clouddn.com/34.jpg'}} style={styles.photo}/>) : (<Image source={require('../images/photo.jpg')} style={styles.photo}/>)
              }
              <Icon name="angle-right" size={22} color="#aaa" />
            </View>
          </TouchableOpacity >

          <View style={ styles.item }>
            <Text style={ styles.ItemText }>帐号</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ color:'#A0A0A0',fontSize:16, }}>{account.name}</Text>
            </View>
          </View >

          <TouchableOpacity style={ styles.item }>
           <Text style={ styles.ItemText }>昵称</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ marginRight:20,color:'#A0A0A0',fontSize:16, }}>{account.nickname}</Text>
              <Icon name="angle-right" size={22} color="#aaa" />
            </View>
          </TouchableOpacity >

          <TouchableOpacity style={ styles.item }>
            <Text style={ styles.ItemText }>性别</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ marginRight:20,color:'#A0A0A0',fontSize:16, }}>{account.gender}</Text>
              <Icon name="angle-right" size={22} color="#aaa" />
            </View>
          </TouchableOpacity >

          <TouchableOpacity style={ styles.item }>
            <Text style={ styles.ItemText }>个性签名</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ marginRight:20,color:'#A0A0A0',fontSize:16, }}>{account.sign}</Text>
              <Icon name="angle-right" size={22} color="#aaa" />
            </View>
          </TouchableOpacity >

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoItem: {
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
  photo:{
    width: 70,
    height:70,
    borderRadius:15,
    marginRight:20
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
    color:'#252525',
    fontSize:16,
    flex:1
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
    account: state.account.account
  }
}

export default connect(map)(Account)