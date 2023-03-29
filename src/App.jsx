import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

const pokemonList =
[
    {
        name: 'bulbasaur',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
        name: 'charmander',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },
    {
        name: 'squirtle',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
        name: 'pikachu',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
        name: 'mew'
    }
];

const App = () =>
{
    // Effect
    useEffect
    (
        () => alert('hello pokemon trainer :)'),
        []
    );

    // States
    let [index, setIndex] = useState(0);

    // Generate the template
    const template =
    (
        <div>
            <PokemonCard pokemon={pokemonList[index]} />
            <NavBar pokemonList={pokemonList} index={index} setIndex={setIndex} />
        </div>
    );
    return template;
};

export default App;
