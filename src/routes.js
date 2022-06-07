import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import Contato from './pages/Contato'

export default function RouterApp() {
    return (       
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/contato' element={<Contato />} />

            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>        
    )
}