
import 'core-js/stable'; // Polyfill everything else
import 'regenerator-runtime'; // Polyfilling async await

import * as model from './model.js';
import paginationView from './views/paginationView.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SECOND } from './config.js';

// Hot reload by parcel
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    // Getting recipe id
    const hashID = window.location.hash.slice(1);
    if (!hashID) return;

    // Rendering spinner
    recipeView.renderSpinner();

    // Update
    resultsView.update(model.getSearchResultPage(model.state.search.page));
    bookmarksView.update(model.state.bookmark);

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
    resultsView.renderSpinner();

    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultPage(1));
    paginationView.render(model.state.search);
  } catch (error) {
  }
}

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
  // Update the recipe serving (in state)
  model.updateServing(newServings);
  // Update the recipe view
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
  // Add or remove the bookmark
  if (!model.state.recipe.bookmarked)
    model.addBookmark(model.state.recipe);
  else
    model.deleteBookmark(model.state.recipe.id);
  // Update recipe view
  recipeView.update(model.state.recipe);
  // Render bookmarks
  bookmarksView.render(model.state.bookmark);
}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmark);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmark);
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();
    setTimeout(function () { addRecipeView.toggleWindow(); }, MODAL_CLOSE_SECOND * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
}

// Subscriber Publisher pattern
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();