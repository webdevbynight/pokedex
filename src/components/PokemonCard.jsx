function PokemonCard({ name, imgSrc })
{
    const cartTemplate =
    (
        <figure>
            {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    );
    return cartTemplate;
}

export default PokemonCard;