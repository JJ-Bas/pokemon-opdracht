import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from "./components/Pokemon";
import Pokemonlist from "./components/Pokemonlist";

function App() {

  return (
    <div>
        <Pokemonlist />
    </div>

  );
}

export default App;
