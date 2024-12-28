import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => (
    <div className="pokemon-list">
        {
            pokemonList.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.name}
                    pokemon={pokemon}
                />
            ))
        }
    </div>
);


export default PokemonList;