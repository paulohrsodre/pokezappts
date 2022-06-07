import React, { useState } from 'react'
import '../App.css';

export default function Searchbar(props) {
  const [search, setSearch] = useState("ditto")
  const {onSearch} = props
  const onChangeHandler = (e) => {
      setSearch(e.target.value)
      if(e.target.value === 0) {
          onSearch(undefined)
      }
  }

  const onButtonClickHandler = () => {
      onSearch(search)
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
      </div>
  )
}
