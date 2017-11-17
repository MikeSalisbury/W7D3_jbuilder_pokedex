import { connect } from "react-redux";
import { requestSinglePokemon } from  "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: state.entities.pokemon[parseInt(state.ui.pokeDisplay)],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
