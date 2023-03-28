import './App.css';
import PokemonCard from './components/PokemonCard';

const pokemonList =
[
    {
        name: 'bulbasaur',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
        name: 'mew'
    }
];

const App = () =>
{
    const chosenPokemon = pokemonList[0],
        appTemplate =
        (
            <div>
                <PokemonCard pokemon={chosenPokemon} />
            </div>
        );
    return appTemplate;
};

export default App;
