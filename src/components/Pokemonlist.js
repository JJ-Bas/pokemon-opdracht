import React, {useEffect, useState} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

function Pokemonlist() {
    const [limit, setLimit] = useState(20)
    const [page, setpage] = useState(0)
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        async function fetchPokedex() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page * 20)}`)
                setPokedex(result.data)
            } catch (error) {
                console.error(error)
            }
        }

        void fetchPokedex()
    }, [page, limit])

    return (
        <>
            <div className='outer-nav-container'>
            <nav>
                {Math.ceil(pokedex.count / limit)} pages
                <div className='page-navigation'>
                    <button type="button" disabled={page < 1 && true} onClick={() => setpage(page - 1)}>last page</button>
                    <p>page {page}</p>
                    <button type="button" disabled={page === Math.ceil(pokedex.count / limit) && true } onClick={() => setpage(page + 1)}>next page</button>
                </div>
                <div className='items-per-page'>
                    <button type='button' onClick={() => setLimit(20)}>20</button>
                    <button type='button' onClick={() => setLimit(40)}>40</button>
                    <button type='button' onClick={() => setLimit(60)}>60</button>
                </div>
            </nav>
            </div>
            <div className='pokedex'>
            {pokedex.count > 0 &&
                pokedex.results.map((pokedexEntry) => {
                    return (
                        <article key={pokedexEntry.name}>
                            <Pokemon pokemoninfo={pokedexEntry.url}/>
                        </article>
                    )
                })
            }
            </div>
        </>
    );
}

export default Pokemonlist