import React, { useState } from 'react'
import { searchPokemon } from '../api'
import '../App.css';

export default function Searchbar() {
  const [search, setSearch] = useState("ditto")
  const [pokemon, setPokemon] = useState()
  
  const onChangeHandler = (e) => {
      setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
      onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
    console.log(result)
  }

  return (
      <div className='searchbar-cotainer'>
          <div className='searchbar'>
                <input 
                    onChange={onChangeHandler}
                />
            </div>
            <div className='searchbar-btn'>
                <button
                    onClick={onButtonClickHandler}
                >
                    Pesquisar
                </button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    {/* <div>Nome: {pokemon.types.type[1]}</div> */}
                    <img src={pokemon.sprites.front_default} alt=""></img>
                </div>
            ) : null}
      </div>
  )
}
