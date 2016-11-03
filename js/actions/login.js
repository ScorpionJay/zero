import {LOGIN,LOGOUT} from './types'
import Config from '../Config'
import { accountAPI,account } from './account'
const Alert = require('Alert');
const ToastAndroid = require('ToastAndroid');

export function loginAPI(username,password,redirect){
	return dispatch => { 
	 	fetch(Config.loginUrl,{
          headers: {
                    'Content-Type': 'application/json'
                },
          method: 'POST',
          body: JSON.stringify({username: username, password: password})
        }).then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            if(json.code === 1){
                ToastAndroid.show(json.message, ToastAndroid.SHORT)
            } 
            if( json.token ){
              dispatch(login(json.token))
              dispatch(accountAPI(json.token))
              redirect()
            }
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
        })
	}
}

// export function logoutAPI(){
//   return dispatch => { 
//     dispatch(login({}))
//      dispatch(account({}))
//   }
// }

export function login(token){
	return {
		type:LOGIN,token
	}
}

export function logoutAPI(){
  return dispatch => {
    dispatch(login(null))
    dispatch(account(null))
  }
}