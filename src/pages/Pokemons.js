import React, {useState, useEffect} from 'react';
import Searchbar from '../components/Searchbar';
import { getPokemons, getPokemonData, searchPokemon } from '../api'
import Pokedex from '../components/Pokedex'

export default function Pokemons() {

  const [page, totalPages] = useState(0);
  const [setPage, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 18
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [page])

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <div className='center'>
      <div className='main'>
        <div>
          <h1>Mais de 250 pokemons para você escolher seu favorito</h1>
          <Searchbar onSearch = {onSearchHandler}/>
          {notFound ? (
            <div class-name="not-found-text"> Meteu essa?! </div>
          ) :
        
          (<Pokedex 
            pokemons={pokemons} 
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />)}  
        </div>   
      </div>
    </div>
  )
}
