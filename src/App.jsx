import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

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
    // Event handlers
    const handlePrevClick = e =>
        {
            setIndex(-- index);
        },
        handleNextClick = e =>
        {
            setIndex(++ index);
        };

    // States
    let [index, setIndex] = useState(0);

    // Generate the template
    const appTemplate =
    (
        <div>
            <PokemonCard pokemon={pokemonList[index]} />
            {index > 0 ? <button onClick={handlePrevClick}>Previous</button> : null}
            {index < pokemonList.length - 1 ? <button onClick={handleNextClick}>Next</button> : null}
        </div>
    );
    return appTemplate;
};

export default App;
