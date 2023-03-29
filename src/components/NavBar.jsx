const NavBar = ({ pokemons, setIndex }) =>
{
    const template =
    (
        <>
            {
                pokemons.map((pokemon, index) =>
                {
                    let { name } = pokemon;
                    return (<button key={index} onClick={() => setIndex(index)}>{name}</button>);
                })
            }
        </>
    );
    return template;
}

export default NavBar;