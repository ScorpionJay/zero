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

import ImagePicker from 'react-native-image-picker';

import { updateNicknameAPI,accountAPI,account,updatePhoto } from '../../actions/account'


const options = {
  title: '选择头像', // specify null or empty string to remove the title
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: '选择照片', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 100, // photos only
  maxHeight: 100, // photos only
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};

class Account extends Component {


  updateNickname(){
    const { dispatch,login } = this.props
    let _this = this;
    this.props.navigator.push({
              id: 'nickname',
              title:'修改昵称',
              params: {
                refresh: function() {
                    // refresh
                    dispatch(accountAPI(_this.props.login))
                }
              }
          })
  }


  updateSign(){
    const { dispatch,login } = this.props
    let _this = this;
    this.props.navigator.push({
              id: 'sign',
              title:'个性签名',
              params: {
                refresh: function() {
                    // refresh
                    dispatch(accountAPI(_this.props.login))
                }
              }
          })
  }

  imageHandler(){
    const { dispatch,login } = this.props
    let _this = this

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
         
          const source = {uri: response.uri, isStatic: true};
          var data = new FormData()
          //data.append('file', response.uri)
          data.append('file', {uri: response.uri, name: "test", type: 'image/jpg'});
          
          dispatch(updatePhoto(_this.props.login, data, _this.props.account  ))
        }
      });
  }


  render() {
    const { account } = this.props

    return (
      <ScrollView> 

          <ToolBar navigator={this.props.navigator} route={this.props.route}/>

          <TouchableOpacity style={ styles.photoItem } onPress={this.imageHandler.bind(this)}>
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

          <TouchableOpacity style={ styles.item } onPress={this.updateNickname.bind(this)}>
           <Text style={ styles.ItemText }>昵称</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ marginRight:20,color:'#A0A0A0',fontSize:16, }}>{ account.nickname}</Text>
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

          <TouchableOpacity style={ styles.item } onPress={this.updateSign.bind(this)} >
            <Text style={ styles.ItemText }>个性签名</Text> 
            <View style={{ flex:1,flexDirection:'row',justifyContent:'flex-end' }}> 
              <Text style={{ marginRight:20,color:'#A0A0A0',fontSize:12, paddingTop:-3}}>{account.sign}</Text>
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
    borderRadius:70,
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
    login: state.login.login,
    account: state.account.account
  }
}

export default connect(map)(Account)