import React, { Fragment } from "react";
import PokeCard from "./PokeCard";
import { Grid } from "@material-ui/core";

// function List({ pokedata }) {
//   return (
//     <Fragment>
//       <h1>Lista de Pokemon</h1>
//       <ul>
//         {pokedata.map((pokemon, index) => {
//           return <li key={index}>{pokemon.name}</li>;
//         })}
//       </ul>
//     </Fragment>
//   );
// }

function List({ pokedata }) {
  return (
    <Fragment>
      <center>
        <h1>Lista de Pokémon</h1>
      </center>
      <Grid container justify="center">
        {pokedata.map((pokemon, index) => {
          let url =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

          let pokeIndex = pokemon.url.split("/")[
            pokemon.url.split("/").length - 2
          ];

          console.log(`${url}${pokeIndex}.png?raw=true`)
          
          return (
            <PokeCard
              key={index}
              to={`/poke-info/${pokeIndex}/${pokemon.name}`}
              name={pokemon.name}
              image={`${url}${pokeIndex}.png?raw=true`}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
}

export default List;
