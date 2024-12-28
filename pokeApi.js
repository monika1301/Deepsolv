import axios from "axios"

const API_URL = "https://pokeapi.co/api/v2";

const getPokemonList = async() => {
    const res = await axios.get(`${API_URL}/pokemon?offset=0&limit=5`);
    return res.data;
}


const getPokemonDetails = async(url) => {
    const res = await axios.get(url);
    return res.data;
}

const getTypes = async() => {
    const res = await axios.get(`${API_URL}/type`); 
    return res.data.results;
}

export {
    getPokemonList,
    getPokemonDetails,
    getTypes
}