const NavBar = ({ pokemons, index, setIndex }) =>
{
    // Event handlers
    const handlePrevClick = () => setIndex(-- index),
        handleNextClick = () => setIndex(++ index);

    const template =
    (
        <>
            {index > 0 ? <button onClick={handlePrevClick}>Previous</button> : null}
            {index < pokemons - 1 ? <button onClick={handleNextClick}>Next</button> : null}
        </>
    );
    return template;
}

export default NavBar;