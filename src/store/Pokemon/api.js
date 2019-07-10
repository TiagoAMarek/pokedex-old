import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2'

export default {
  async getPokemon(name) {
    const { data } = await axios.get(`${apiUrl}/pokemon/${name}`)

    return data
  }
}
