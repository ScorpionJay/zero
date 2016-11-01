import { combineReducers } from 'redux'
import { SWITCH_TAB } from '../actions/types'

function tab(state = 'login', action) {
  switch (action.type) {
    case SWITCH_TAB:
      return action.tab
    default:
      return state
  }
}

const Reducers = combineReducers({
  tab
})

export default Reducers