import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon"

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;
  const onLeftClickHandler = () => {
    if(page > 0) setPage(page-1)
  }
  const onRightClickHandler = () => {
    if(page+1 !== totalPages) setPage(page+1)
  }
  console.log("pokemons", pokemons)

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
            <Pagination 
                page={page+1}
                totalPages={totalPages}
                onLeftClick={onLeftClickHandler}
                onRightClick={onRightClickHandler}
            />
        </div>
    </div>
  );
};

export default Pokedex;
