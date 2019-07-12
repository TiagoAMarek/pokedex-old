import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPokemonByName } from 'store/Pokemon/sideEffects'

import logo from 'assets/pokemon-logo.png'
import './Hero.scss'

const Hero = () => {
  const [pokemonName, setPokemonName] = useState('')
  const dispatch = useDispatch()

  const searchForPokemon = () => dispatch(fetchPokemonByName(pokemonName))

  return (
    <div className="Hero">
      <section className="hero is-medium is-danger">
        <div className="hero-body">
          <div className="container has-text-centered">
          <img className="logo" src={logo} alt="logo"></img>
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input
                  value={pokemonName}
                  onChange={e => setPokemonName(e.target.value)}
                  className="input is-large is-rounded"
                  type="text"
                />
              </div>
              <div className="control">
                <button onClick={searchForPokemon} className="button is-primary is-large is-rounded">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero