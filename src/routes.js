import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import Contato from './pages/Contato'

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pokemons' element={<Pokemons />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </Router>
    )
}

export default RouterApp;