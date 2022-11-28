import React, { useState, useEffect } from "react"
import Pokemon from "../../components/Pokemon/Pokemon"
import { getPokemon } from "../../services/api-calls"


const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        getPokemon()
        .then(pokemonData => console.log(pokemonData))
    }, [])
    return (
        <>
            <h2>Pokemon List Page</h2>
            <Pokemon />
        </>
    )
}

export default PokemonList