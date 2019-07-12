import axios from 'axios'
import { requestPokemonByName, receivePokemonByName, pokemonByNameNotFound } from './actions'

const apiUrl = 'https://pokeapi.co/api/v2'

const fetchPokemonByName = name => (async dispatch => {
  dispatch(requestPokemonByName())

  try {
    const { data } = await axios.get(`${apiUrl}/pokemon/${name}`)
    dispatch(receivePokemonByName(data))
  } catch (error) {
    dispatch(pokemonByNameNotFound())
  }
})

export {
  fetchPokemonByName
}