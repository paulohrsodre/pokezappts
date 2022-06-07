import React, {useState, useEffect} from 'react';
import Searchbar from '../components/Searchbar';
import '../App.css';
import { getPokemons, getPokemonData } from '../api'
import Pokedex from '../components/Pokedex'


export default function Pokemons() {

  const [page, totalPages] = useState(0)
  const [setPage, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([])

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

  return (
    <div className='center'>
      <div className='main'>
        <div>
          <h1>Mais de 250 pokemons para você escolher seu favorito</h1>
          <Searchbar />
        </div>
        <div>
          <Pokedex 
            pokemons={pokemons} 
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />  
        </div>      
      </div>
    </div>
  )
}
