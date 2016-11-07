import { combineReducers } from 'redux'
import { ARTICLE } from '../actions/types'

function article(state = {}, action) {
  switch (action.type) {
    case ARTICLE:
      return action.data
    default:
      return state
  }
}

const Reducers = combineReducers({
  article
})

export default Reducers