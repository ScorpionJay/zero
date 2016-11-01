import { ACCOUNT } from './types'
import Config from '../Config'


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

export function account(account){
	return {
		type:ACCOUNT,account
	}
}