import {
  REQUEST_POKEMON_BY_NAME,
  RECEIVE_POKEMON_BY_NAME,
  POKEMON_BY_NAME_NOT_FOUND,
} from './actionTypes'

export const requestPokemonByName = () => ({
  type: REQUEST_POKEMON_BY_NAME
})

export const receivePokemonByName = payload => ({
  type: RECEIVE_POKEMON_BY_NAME,
  payload,
})

export const pokemonByNameNotFound = payload => ({
  type: POKEMON_BY_NAME_NOT_FOUND,
  payload,
})
