import React from "react";


export default ({ pokemon }) => (
  <li className="li-class">
    <h1>{pokemon.name}</h1>
    <img src={pokemon.image_url} />
  </li>
);
