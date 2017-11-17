import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return {
        pokeDisplay: Object.keys(action.pokemon)[0],
        errors: {},
        loading: {}
      };
    default:
      return state;
  }
};

export default uiReducer;
