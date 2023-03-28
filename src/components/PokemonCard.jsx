import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) =>
{
    const { name, imgSrc } = pokemon,
        cartTemplate =
    (
        <figure>
            {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    );
    return cartTemplate;
}
PokemonCard.propTypes =
{
    pokemon: PropTypes.shape
    (
        {
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string
        }
    ).isRequired
}

export default PokemonCard;