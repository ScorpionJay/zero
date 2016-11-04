import { ACCOUNT } from './types'
import Config from '../Config'
const ToastAndroid = require('ToastAndroid');


export function accountAPI(token){
   console.log(token,Config.accountUrl)
	return dispatch => { 
	 	fetch(Config.accountUrl,{
          headers: {
                    'Content-Type': 'application/json',
                    'token':token
                },
          method: 'get'
        }).then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            dispatch(account(json.data))
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
        })
	}
}

export function account(account){
  console.log('帐号',account)
	return {
		type:ACCOUNT,account
	}
}

export function updateNicknameAPI(token,val,accountData,goback){
    console.log(token,Config.updateNickname)
    return dispatch => { 
      fetch(Config.updateAccount,{
            headers: {
                      'Content-Type': 'application/json',
                      'token':token
                  },
            method: 'post',
            body: JSON.stringify({value:val,key:'nickname'})
          })
          .then(function(response) {
              return response.json()
          })
          .then(function(json) {
              console.log(json)
              if(json.code == 0){
                account.nickname = val
                dispatch(account(accountData))
                goback()
              }else{
                ToastAndroid.show(json.message, ToastAndroid.SHORT)
              }
          })
          .catch(function(ex) {
            console.log('parsing failed', ex)
            ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
          })
      
    }
}


export function updateSignAPI(token,sign,accountData,goback){
    console.log(token,Config.updateNickname)
    return dispatch => { 
      fetch(Config.updateAccount,{
            headers: {
                      'Content-Type': 'application/json',
                      'token':token
                  },
            method: 'post',
            body: JSON.stringify({value:sign,key:'sign'})
          })
          .then(function(response) {
              return response.json()
          })
          .then(function(json) {
              console.log(json)
              if(json.code == 0){
                account.sign = sign
                dispatch(account(accountData))
                goback()
              }else{
                ToastAndroid.show(json.message, ToastAndroid.SHORT)
              }
          })
          .catch(function(ex) {
            console.log('parsing failed', ex)
            ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
          })
      
    }
}

export function updatePhoto(token,photo,accountData){
  console.log(photo)
    return dispatch => { 
      fetch(Config.fileUpload, {
            method: 'POST',
            headers: {
                "Content-Type": " multipart/form-data ",
                'token':token
            },
            body: photo
          }).then((data)=> data.json() )
            .then((jsonData) =>{
              console.log(jsonData)
              // if(jsonData.code === 0){
              //     this.setState({
              //       avatarSource: Config.fileUrl + jsonData.data
              //     });
              //     ToastAndroid.show(jsonData.msg, ToastAndroid.SHORT)
              // }else if(jsonData.status === 401){
              //     // token过期 重新登录
              //     ToastAndroid.show('帐号过期，重新登录', ToastAndroid.SHORT)
              //     // 删除本地的
              //     this.props.navigator.push({
              //         id:'login',
              //         title:'登录',
              //         params: {
              //           username: username
              //         }
              //       }
              //     )
              // }
              // else{
              //   ToastAndroid.show('上传失败', ToastAndroid.SHORT)
              // }
            })
            .catch(function(ex) {
            console.log('parsing failed', ex)
            ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
          })
    }
}