import {LOGIN,LOGOUT} from './types'
import Config from '../Config'
import { accountAPI,account } from './account'
const Alert = require('Alert');

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
            if( json.token ){
              dispatch(login(json.token))
              // Alert.alert(
              //   `Hi, `,
              //   'Log out from F8?',
              //   [
              //     { text: 'Cancel' },
              //     { text: 'Log out'},
              //   ]
              // );
              dispatch(accountAPI(json.token))
              redirect()
            }
            //   const token = response.headers.get("Auth-Token");
            //    if(token){
	           //     // dispatch(login(user))
	           //     // 页面跳转
	           //     // if (redirect) redirect()
            //    }else{
            //    	 // dispatch(loginError('帐号或密码错误'))
            //    	 // dispatch(showMessage('帐号或密码错误'))
            //    }
            // }

        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          // dispatch(showMessage('网络繁忙，请稍候重试！'))
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