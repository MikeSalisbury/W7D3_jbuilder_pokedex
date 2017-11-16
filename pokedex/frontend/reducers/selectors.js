export const selectAllPokemon = (state) => (
  Object.keys(state.entities.pokemon).map((key) => state.entities.pokemon[key])
);
