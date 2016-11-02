import {FETCH_LIST,FETCH_LIST_ITEM} from './types'

export function addTodo(text){
	return {
		type: FETCH_LIST,text
	}
}

export function fetchListItem(value){
	return {
		type:FETCH_LIST_ITEM,value
	}
}


export function fetchList(){
	return dispatch => {
	 	fetch('https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',{
			//mode: "cors"
		}).then(function(response) {
	    	return response.json()
	    }).then(function(json) {
	    	// hardcode
	    	json = [
	    		{name:'音乐',color:'#F5AE25',link:'music'},
	    		{name:'新闻',color:'#7F30F1',link:'news'},
	    		{name:'图片',color:'#F63B71',link:'picture'},
	    		{name:'足球',color:'#3dbcf5',link:'football'},
	    		{name:'博客',color:'#28B2F3',link:'blog'},
	    		{name:'交通',color:'#E32218',link:'transform'},
	    		{name:'天气',color:'#2EC6B9',link:'weather'},
	    		{name:'上海',color:'#EB453F',link:'shanghai'},
	    		{name:'健身',color:'#ED8F39',link:'fitness'},
	    		{name:'...',color:'#de533a',link:'music'}
	    	]

	     	dispatch(addTodo(json))
	  	}).catch(function(ex) {
	    	console.log('parsing failed', ex)
	  	})}
}


export function fetchListItemApi(id){
	 return dispatch => {
	 	fetch('https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',{
			//mode: "cors"
		}).then(function(response) {
	    	return response.json()
	  	})
		.then(function(json) {
	     	dispatch(fetchListItem(json[id-1]))
	  	}).catch(function(ex) {
	   		console.log('parsing failed', ex)
	 	})
	}
}