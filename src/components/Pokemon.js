import React, {useEffect, useState} from "react";
import axios from "axios";
import './pokemon.css'

function Pokemon({pokemoninfo}) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        async function fetchPokedex() {
            try{
                const result = await axios.get(`${pokemoninfo}`)
                console.log(result)
                setPokemon(result.data)
            }catch(error){
                console.error(error)
            }
        }
        void fetchPokedex()
    },[])
    return (
        <div className='pokemon-card'>
            {pokemon.id > 0 &&
                <>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="poke-image"/>
                    <div className='pokemon-card-text'>
                    <h2>{pokemon.name}</h2>
                        <ul>
                    {pokemon.types.map((multipletypes) => {
                    return (
                        <li>{multipletypes.type.name}</li>
                        )})
                    }</ul>
                    </div>
                </>
            }
        </div>
    );
}

export default Pokemon;


