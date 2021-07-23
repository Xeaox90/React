import "../styles.css";
import React from "react";

export default class RecipeSearch extends React.Component {
  state = {
    recipes: [
      "Apple Pie",
      "Cherry Pie",
      "Pizza Pie",
      "Hamburger",
      "Ham Steak",
      "Chocolate Mousse",
      "Chocolate Ice Cream"
    ],
    searchTerm: ""
  };

  render() {
    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return recipe
        .toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());
    });

    let recipesList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>;
    });

    return (
      <div className="recipes">
        <input
          placeholder="RECIPES"
          value={this.state.searchTerm}
          onChange={(event) => {
            this.updateSearch(event);
          }}
        ></input>
        <ul>{recipesList}</ul>
      </div>
    );
  }

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
}
