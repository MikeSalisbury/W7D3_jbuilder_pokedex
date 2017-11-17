import React from 'react';
import { Link } from "react-router-dom"

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }


  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  displayProps() {
    const p = this.props.pokemon;
    return (
      <div className="detail-info">
        <h2>{p.name}</h2>
        <div className="more-info">

          <h3 className="info-words">Attack: {p.attack}</h3>
          <h3 className="info-words">Defense: {p.defense}</h3>
          <h3 className="info-words">Poke-Type: {p.poke_type.capitalize()}</h3>
        </div>
        <div className="moves-div">
          {p.moves.map((move) => <span className="move-span info-words">{move.capitalize()}</span> )}
        </div>
      </div>
    );
  }

  displayItems() {
    const items = this.props.pokemon.items.map((i) => (
      this.props.items[i]
    ));
    return (
      <div className="detail-items">
      {
        items.map((item) => (
          <Link className="block-a" to={"/pokemon/"+
            this.props.pokemon.id + "/items/" + item.id}>
            <img className="image-border index-item-img" src={item.image_url} />
          </Link>
        ))
      }
      </div>
    );
  }

  render() {

    if (!this.props.pokemon) {
      return (
        <div className="detail-div">
          <div className="loading-div">
            <h1>Loading</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="detail-div">
        <div className="detail-img-div">
          <img className="index-item-img image-border" src={this.props.pokemon.image_url} />
        </div>
        {this.displayProps()}
        {this.displayItems()}
      </div>
    );
  }
}

export default PokemonDetail;
