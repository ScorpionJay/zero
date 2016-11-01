import { combineReducers } from 'redux'
import { MUSIC_RECOMMEND } from '../actions/types'

function musicRecommend(state = {}, action) {
  switch (action.type) {
    case MUSIC_RECOMMEND:
      return action.data
    default:
      return state
  }
}

const Reducers = combineReducers({
  musicRecommend
})

export default Reducers