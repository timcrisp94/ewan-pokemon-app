import React, { useState, useEffect } from "react"
import Pokemon from "../../components/Pokemon/Pokemon"
import { getPokemon } from "../../services/api-calls"


const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getPokemon()
        .then(pokemonData => setPokemon(pokemonData.results))
    }, [])

    return (
        <>
            <h2>Pokemon List</h2>
            {pokemon.map(p =>
            <Pokemon key={p.name} p={p} />
            
            )}
            
        </>
    )
}

export default PokemonList