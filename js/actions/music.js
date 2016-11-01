import { MUSIC_RECOMMEND } from './types'
import Config from '../Config'


export function musicRecommendAPI(){
	return dispatch => { 
	 	fetch(Config.musicRecommendUrl,{
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'get'
        }).then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            dispatch(musicRecommend(json.data))
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          // dispatch(showMessage('网络繁忙，请稍候重试！'))
        })
	}
}

export function musicRecommend(data){
	return {
		type:MUSIC_RECOMMEND,data
	}
}