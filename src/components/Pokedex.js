import React from "react";
import Pokemon from "./Pokemon"

const Pokedex = (props) => {
  const { pokemons, loading} = props;
  

  return (
    <div>
      <div className="pokedex-header">
        
      </div>
      {loading ? 
        <div>
            Carregando
        </div> : 
        <div className="pokedex-grid">
            {pokemons && pokemons.map((pokemon, index) => {
                return (
                    <Pokemon pokemon={pokemon} key={index} />
                )
            })}
        </div>}
        <div className="pokedex-footer">
            
        </div>
    </div>
  );
};

export default Pokedex;
