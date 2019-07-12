import initialState from './initialState'
import {
  REQUEST_POKEMON_BY_NAME,
  RECEIVE_POKEMON_BY_NAME,
  POKEMON_BY_NAME_NOT_FOUND,
} from './actionTypes'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_POKEMON_BY_NAME:
      return {
        ...state,
        loading: true,
      }

    case RECEIVE_POKEMON_BY_NAME:
      return {
        data: { ...payload },
        found: true,
        loading: false,
      }

    case POKEMON_BY_NAME_NOT_FOUND:
      return {
        data: {},
        found: false,
        loading: false,
      }

    default:
      return state
  }
}