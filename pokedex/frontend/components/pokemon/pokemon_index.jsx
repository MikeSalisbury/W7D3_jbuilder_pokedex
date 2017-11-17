import React from "react";
import PokemonIndexItem from "./pokemon_index_item";
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    const pokemonItems = this.props.pokemon
      .map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    return(
      <ul className="flex-dad">
        {pokemonItems}
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </ul>
    );
  }
}

export default PokemonIndex;
