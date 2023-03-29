const NavBar = ({ pokemonList, index, setIndex }) =>
{
    // Event handlers
    const alertPikachu = () => alert('pika pikachu !!!'),
        handlePrevClick = () =>
        {
            setIndex(-- index);
            if (pokemonList[index].name === 'pikachu') alertPikachu(); // In case Pikachu appears
        },
        handleNextClick = () =>
        {
            setIndex(++ index);
            if (pokemonList[index].name === 'pikachu') alertPikachu(); // In case Pikachu appears
        };

    const template =
    (
        <>
            {index > 0 ? <button onClick={handlePrevClick}>Previous</button> : null}
            {index < pokemonList.length - 1 ? <button onClick={handleNextClick}>Next</button> : null}
        </>
    );
    return template;
}

export default NavBar;