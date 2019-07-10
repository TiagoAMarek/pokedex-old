import { getPokemon } from './api'

import {
  REQUEST_POKEMON_BY_NAME,
  RECEIVE_POKEMON_BY_NAME,
} from './actionTypes'

export const requestPokemonByName = () => ({
  type: REQUEST_POKEMON_BY_NAME
})

export const receivePokemonByName = payload => ({
  type: RECEIVE_POKEMON_BY_NAME,
  payload,
})

export const fetchPokemonByName = name => (async dispatch => {
  dispatch(requestPokemonByName())
  const payload = await getPokemon(name)

  dispatch(receivePokemonByName(payload))
})

