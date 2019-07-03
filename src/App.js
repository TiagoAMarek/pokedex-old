import React, { useState, useEffect } from 'react'
import Pokemons from './states/Pokemons'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await Pokemons.getPokemons()
      setPokemons(response)
    }

    fetchData()
  }, [])


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
