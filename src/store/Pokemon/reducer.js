import initialState from './initialState'
import {
  fetchPokemonByIdStarted,
  fetchPokemonByIdSuccess,
  fetchPokemonByIdFail,
} from './actionTypes'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchPokemonByIdStarted:
      return { ...state, loading: true }

    case fetchPokemonByIdFail:
      return { ...state, loading: false }

    case fetchPokemonByIdSuccess:
      return { ...payload, loading: false }

    default:
      return state
  }
}