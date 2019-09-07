import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getAll: [],
  getOne:['id'],
  getAllSuccess: ['users'],

  getSingle: ['id']
})

export default Creators