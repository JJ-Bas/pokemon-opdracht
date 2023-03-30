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
        <div>
            {pokemon.id > 0 &&
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="poke-image"/>
            }
        </div>
    );
}

export default Pokemon;


