import React, { Component } from "react";
import PokeDescription from "../components/PokeDescription";
import axios from "axios";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

class PokeInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDescription: "",
      pokeName: "",
      pokeId: "",
      color: ""
    };
  }

  componentDidMount() {
    //peticion con axios
    const { match } = this.props;
    const pokeName = match.params.pokeName;
    const pokeId = match.params.pokeIndex;
    const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}`;
    axios.get(pokeDescriptionUrl).then(res => {
      const { flavor_text_entries, color } = res.data;

      this.setState({
        pokemonDescription: (
          flavor_text_entries.find(({ language: { name } }) => name === "es") ||
          {}
        ).flavor_text,
        pokeName,
        pokeId,
        color: color.name
      });
    });
  }
  render() {
    let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/";
    const { pokemonDescription, pokeName, pokeId, color } = this.state;
    return (
      <>
        <AppNav />
        <div className="Background-Img3">
          <PokeDescription
            name={pokeName}
            pokeImage={`${url}${pokeId}.png?raw=true`}
            description={pokemonDescription}
            color={color}
          />
        </div>
        <Footer />
      </>
    );
  }
}
export default PokeInfoContainer;
