import { createReducer } from 'reduxsauce'

import { Types as userActions } from './userActions'

export const INITIAL_STATE = {
  users: []
}

const getAllSuccess = (states, { users }) => {
  return { ...states, users }
}

export default createReducer(INITIAL_STATE, {
  [userActions.GET_ALL_SUCCESS]: getAllSuccess
})