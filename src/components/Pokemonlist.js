import React, {useEffect, useState} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

function Pokemonlist() {
    const [page, setpage] = useState(0)
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        async function fetchPokedex() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
                setPokedex(result.data)
            } catch (error) {
                console.error(error)
            }
        }

        void fetchPokedex()
    }, [])

    return (
        <>
            {pokedex.count > 0 &&
            pokedex.results.map((pokedexEntry) => {
                    return (
                        <article key={pokedexEntry.name}>
                            <p>{pokedexEntry.name}</p>
                            <Pokemon pokemoninfo={pokedexEntry.url}/>
                            <p>{1281 / 20}</p>
                        </article>
                    )
                })
            }

        </>
    );
}

export default Pokemonlist