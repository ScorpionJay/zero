import { combineReducers } from 'redux'
import { ACCOUNT } from '../actions/types'

function account(state = {}, action) {
  switch (action.type) {
    case ACCOUNT:
      return action.account
    default:
      return state
  }
}

const Reducers = combineReducers({
  account
})

export default Reducers