import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2'

export default {
  async getPokemons() {
    const { data } = await axios.get(`${apiUrl}/pokemon`)

    return data.results
  }
}
