import { ARTICLE } from './types'
import Config from '../Config'
const ToastAndroid = require('ToastAndroid');


export function articleAPI(token){
	return dispatch => { 
	 	fetch(Config.article + '0/10',{
          headers: {
                    'Content-Type': 'application/json',
                },
          method: 'get'
        }).then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            dispatch(article(json))
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          ToastAndroid.show('网络繁忙，请稍候重试！', ToastAndroid.SHORT)
        })
	}
}

export function article(data){
	return {
		type:ARTICLE,data
	}
}

