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
    }
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