import { combineReducers } from 'redux'

import  home from './home'
import  navigation from './navigation'
import  login from './login'
import  account from './account'
import  music from './music'
import  article from './article'
// import  message from './message'
// import  account from './account'

const reducers = combineReducers({
  home,
  navigation,
  login,
  account,
  music,
  article
  //,login,message,account
})

export default reducers