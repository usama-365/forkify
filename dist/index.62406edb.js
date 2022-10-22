const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    try {
        const response = await fetch("https://forkify-api.herokuapp.com/api/get?rId=47746");
        const data = await response.json();
        console.log(response, data);
    } catch (error) {
        alert(error);
    }
};

//# sourceMappingURL=index.62406edb.js.map
