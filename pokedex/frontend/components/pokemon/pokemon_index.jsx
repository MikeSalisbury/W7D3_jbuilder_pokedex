import React from "react";
import PokemonIndexItem from "./pokemon_index_item";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
        <ul className="flex-dad">
        {
          this.props.pokemon.map((pokemon) => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;
