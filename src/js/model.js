import { async } from "regenerator-runtime";
import { API_URL, RESULTS_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
    recipe: {},
    search: {
        query: '',
        page: 1,
        results: [],
        resultsPerPage: RESULTS_PER_PAGE
    },
    bookmark: [],
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
        let { data: { recipe } } = data;
        // Formatting nicely
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceURL: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };

        if (state.bookmark.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true;
        else
            state.recipe.bookmarked = false;
    } catch (error) {
        throw error;
    }

}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)
        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
            }
        });
    } catch (error) {
        throw error;
    }
}

export const getSearchResultPage = function (page) {
    state.search.page = page;
    const start = (page - 1) * 10, end = page * 10;
    return state.search.results.slice(start, end);
}

export const updateServing = function (newServing) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServing) / state.recipe.servings;
    });
    state.recipe.servings = newServing;
}

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
}

export const addBookmark = function (recipe) {
    // Add bookmark
    state.bookmark.push(recipe);
    // Mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
}

export const deleteBookmark = function (id) {
    const index = state.bookmark.findIndex(el => el.id === id);
    state.bookmark.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
}

const init = function () {
    const bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks) state.bookmark = JSON.parse(bookmarks);
}

init();

const clearBookmarks = function () {
    localStorage.clear('bookmarks');
}