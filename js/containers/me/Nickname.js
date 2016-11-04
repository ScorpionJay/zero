import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput
} from 'react-native';

import ToolBar from '../common/ToolBar'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import { updateNicknameAPI } from '../../actions/account'

class Nickname extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      nickname:this.props.account.nickname
    };
  }

  goback(){
     this.props.route.params.refresh();
     this.props.navigator.pop()
  }

  updateNickname(){
    const { dispatch,login,account } = this.props
    dispatch(updateNicknameAPI(login,this.state.nickname,account,this.goback.bind(this) ))
  }

  

  render() {
    const { account } = this.props

    return (
      <View> 

          <ToolBar navigator={this.props.navigator} route={this.props.route} rightEvent = {this.updateNickname.bind(this)}/>

          
          <TextInput  placeholder='请输入昵称' placeholderTextColor="#aaa" autoFocus={true}
          underlineColorAndroid={'transparent'}
              style={{ color:'#A0A0A0',fontSize:16,backgroundColor:'#fff',marginTop:20 }}
               value={this.state.nickname} onChangeText={(nickname) => this.setState({nickname})}
                      ></TextInput>
             

      </View>
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
    color:'#252525',
    fontSize:16,
    flex:1
  },

});


function map(state) {
  return {
    login: state.login.login,
    account: state.account.account
  }
}

export default connect(map)(Nickname)