import React from "react";
import { Link } from "react-router-dom";


export default ({ pokemon }) => (
  <Link className="" to={"/pokemon/" + pokemon.id}>
    <li className="li-class">
      <h1>{pokemon.name}</h1>
      <div className="poke-img-box">
        <img className="index-item-img index-item-link" src={pokemon.image_url} />
      </div>
    </li>
  </Link>
);
