export const state = {
    recipe: {}
};

export const loadRecipe = async function (id) {
    try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
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
        alert(error);
    }

}
