
import 'core-js/stable'; // Polyfill everything else
import 'regenerator-runtime'; // Polyfilling async await

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const controlRecipes = async function () {
  try {
    // Getting recipe id
    const hashID = window.location.hash.slice(1);
    if (!hashID) return;

    // Rendering spinner
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(hashID);
    const { recipe } = model.state;

    // Rendering recipe
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderError(error);
  }
}

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    searchView.clearInput();
    await model.loadSearchResults(query);

    console.log(model.state.search.results);
  } catch (error) {

  }
}

// Subscriber Publisher pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();
controlSearchResults();