import React, {useState, useEffect} from "react";
import { getPokemonList, getTypes } from "./services/pokeApi";
import PokemonList from "./components/PokemonList";


const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [types, setTypes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getPokemonList().then((data) => {
            const formattedList = data.result.map((pokemon) => ({
                name: pokemon.name,
                url: pokemon.url,
                image: `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`,
            }));
            setPokemonList(formattedList);
        });

        getTypes().then(setTypes);

    }, [currentPage]);

    return (
        <div className="app">
            <header>
                <h1>Pokedex</h1>
            </header>
            <PokemonList
                pokemonList={pokemonList}
            />
        </div>
    );
};

export default App;