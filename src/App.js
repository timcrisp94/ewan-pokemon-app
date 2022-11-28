import React from "react"
import './App.css';
import { Route, Routes } from 'react-router-dom'
import PokemonList from "./pages/PokemonList/PokemonList"


function App() {
  return (
    <> 
      <h1>sanity check</h1>
      <a href="/pokemon">To the Pokemon!</a>
      <Routes>
        <Route to='/pokemon' element={<PokemonList />} />
      </Routes>
    </>
  );
}

export default App;
