
import 'core-js/stable'; // Polyfill everything else
import 'regenerator-runtime'; // Polyfilling async await

import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    alert(error);
  }
}

// Adding event listener
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);