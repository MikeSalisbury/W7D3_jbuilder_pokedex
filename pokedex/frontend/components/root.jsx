import React from "react";
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Switch, HashRouter, Route } from 'react-router-dom';

export default ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);
