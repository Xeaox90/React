import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./Components/RecipeSearch";
import "./Components/App2";

import RecipeSearch from "./Components/RecipeSearch";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RecipeSearch />
  </StrictMode>,
  rootElement
);
